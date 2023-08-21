import { CreateCategoryDto } from './../category/dto/create-category.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { Store } from './entities/store.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../category/entities/category.entity';

@Injectable()
export class StoreService {
  constructor(@InjectRepository(Store) private readonly storeRepo: Repository<Store>, @InjectRepository(Category) private readonly categoryRepo: Repository<Category>){}
  async create(createStoreDto: CreateStoreDto) {
    let {category_id} = createStoreDto
    let category = await this.categoryRepo.findOne({where: {id: category_id}})
    if(!category){
      return new NotFoundException('such category does not exist')
    }
    let newStore = this.storeRepo.create({
      store_name: createStoreDto.store_name,
      phone_number: createStoreDto.phone_number,
      address: createStoreDto.address,
      longitude: createStoreDto.longitude,
      latitude: createStoreDto.latitude,
      status: createStoreDto.status,
      category: category
    })
    await this.storeRepo.save(newStore)
    return {
      status: 201,
      message: 'created',
      data: newStore
    }
  }

  async findAll() {
    let stores = await this.storeRepo.find({relations: ["category"]})
    if(!stores.length){
      return new NotFoundException()
    }
    return {
      status: 200,
      message: 'all stores',
      data: stores
    }
  }

  async findOne(id: number) {
    let store = await this.categoryRepo.findOne({where: {id}})
    if(!store){
      return new NotFoundException('Store not found')
    }
    return {
      status: 200,
      message: 'store by id',
      data: store
    }
  }

  async update(id: number, updateStoreDto: UpdateStoreDto) {
    let store = await this.storeRepo.findOne({where: {id}})
    if(!store){
      return new NotFoundException('Store not found')
    }
    store.store_name = updateStoreDto.store_name || store.store_name,
    store.phone_number = updateStoreDto.phone_number || store.phone_number,
    store.address = updateStoreDto.address || store.address,
    store.longitude = updateStoreDto.longitude || store.longitude,
    store.latitude = updateStoreDto.latitude || store.latitude,
    store.status = updateStoreDto.status
    await this.storeRepo.save(store)
    return {
      status: 200,
      message: 'updated',
      data: store
    }
  }

  async remove(id: number) {
    let store = await this.storeRepo.findOne({where: {id}})
    if(!store){
      return new NotFoundException('Store not found')
    }
    await this.storeRepo.remove(store)
    return {
      status: 200,
      message: 'successfully deleted'
    }
  }
}
