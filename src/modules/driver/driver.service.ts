import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { Driver } from './entities/driver.entity';

@Injectable()
export class DriverService {
  constructor(@InjectRepository(Driver) private readonly driverRepo: Repository<Driver>) { }

  async findAll() {
    let users = await this.driverRepo.find();
    return users
  }

  async findOne(id: number) {
    return await this.driverRepo.findOneBy({ id });
  }

  async create(body: CreateDriverDto) {
    const duplicate = await this.driverRepo.findOneBy({ car_number: body.car_number })
    if (duplicate) {
      throw new Error("Car number already exists!")
    }
    const driver = this.driverRepo.create(body);
    this.driverRepo.save(driver);
    return driver
  }

  async update(id: number, body: UpdateDriverDto) {
    let foundDriver = await this.driverRepo.findOneBy({ id });
    if (!foundDriver) {
      throw new Error("Driver is not found!")
    }
    return await this.driverRepo.update({ id }, body);
  }

  async delete(id: number) {
    let foundDriver = await this.driverRepo.findOneBy({ id });
    if (!foundDriver) {
      throw new Error("Driver is not found!")
    }
    return await this.driverRepo.delete({ id });
  }
}
