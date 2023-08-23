import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { Driver } from '../driver/entities/driver.entity';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';

@Injectable()
export class OrderService {
  constructor(@InjectRepository(Order) private readonly orderRepo: Repository<Order>,
  @InjectRepository(Driver) private readonly driverRepo: Repository<Driver>){}
  async create(createOrderDto: CreateOrderDto) {
    let newOrder = this.orderRepo.create({
      ...createOrderDto,
      user: {id: createOrderDto.userId},
      products: createOrderDto.productIds.map(productId => ({ id: productId })),
      driver: null
    })
    await this.orderRepo.save(newOrder)
    return {
      status: 201,
      message: 'order added',
      data: newOrder
    }
  }

  async findAll() {
    let orders = await this.orderRepo.find({
      relations: ['products', 'user', 'driver'],
    })
    return {
      status: 200,
      message: 'all orders',
      data: orders
    }
  }

  async findOne(id: number) {
    let order = await this.orderRepo.findOne({where: {id},
      relations: ['products', 'user', 'driver'],
    })
    if(!order){
      return new NotFoundException('order not found')
    }
    return {
      status: 200,
      message: 'order by id',
      data: [order]
    }
  }

  async asssignDriver(updateOrderDto: UpdateOrderDto) {
    let order = await this.orderRepo.findOne({where: {id: updateOrderDto.order_id}, 
      relations: ['products', 'user', 'driver'],
    })
    if(!order){
      return new NotFoundException('order not found')
    }
    let driver = await this.driverRepo.findOne({where: {id: updateOrderDto.driver_id}})
    if(!driver){
      return new NotFoundException('driver not found')
    }
    order.driver = driver;
    await this.orderRepo.save(order)
    return {
      status: 200,
      message: 'driver assigned',
      data: [order]
    }
  }

  async changeOrderStatus(id:number, updateOrderStatusDto: UpdateOrderStatusDto){
    let order = await this.orderRepo.findOne({where: {id}})
    if(!order){
      return new NotFoundException('order not found')
    }
    order.status = updateOrderStatusDto.status
    await this.orderRepo.save(order)
    return {
      status: 200,
      message: 'order status changed',
      data: [order]
    }
  }

  async remove(id: number) {
    let order = await this.orderRepo.findOne({where: {id}})
    if(!order){
      return new NotFoundException('order not found')
    }
    await this.orderRepo.remove(order)
    return {
      status: 200,
      message: 'order deleted'
    }
  }
}
