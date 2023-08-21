import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(Users) private readonly userRepo: Repository<Users>) { }

  async findAll() {
    let users = await this.userRepo.find({relations: {complains: true}});
    return users
  }

  async findOne(id: number) {
    return await this.userRepo.findOneBy({ id });
  }

  async create(body: CreateUserDto) {
    let duplicate = await this.userRepo.findOneBy({ username: body.username });
    if (duplicate) {
      throw new Error("Username is already taken")
    }
    const user = this.userRepo.create(body);
    this.userRepo.save(user);
    return user
  }

  async update(id: number, body: UpdateUserDto) {
    let foundUser = await this.userRepo.findOneBy({ id });
    if (!foundUser) {
      throw new Error("User is not found!")
    }
    return await this.userRepo.update({ id }, body);
  }

  async delete(id: number) {
    let foundUser = await this.userRepo.findOneBy({ id });
    if (!foundUser) {
      throw new Error("User is not found!")
    }
    return await this.userRepo.delete({ id });
  }
}
