import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(@InjectRepository(Category) private readonly categoryRepo: Repository<Category>){}
  async create(createCategoryDto: CreateCategoryDto) {
    let newCategory = this.categoryRepo.create(createCategoryDto);
    await this.categoryRepo.save(newCategory)
    return {
      status: 201,
      message: "created",
      data: newCategory
    }
  }

  async findAll() {
    let categories = await this.categoryRepo.find({relations: ['stores']});
    return {
      status: 200,
      message: 'all categories',
      data: categories
    }
  }

  async findOne(id: number) {
    let category = await this.categoryRepo.findOne({where: {id}})
    if(!category){
      return new NotFoundException('category is not found')
    }
    return {
      status: 200,
      message: 'category by id',
      data: category
    }
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    let category = await this.categoryRepo.findOne({where: {id}})
    if(!category){
      return new NotFoundException('no category to update')
    }
    category.category_name = updateCategoryDto.category_name || category.category_name
    category.status = updateCategoryDto.status
    await this.categoryRepo.save(category)
    return {
      status: 200,
      message: 'updated',
      data: [category]
    }
  }

  async remove(id: number) {
    let category = await this.categoryRepo.findOne({where: {id}})
    if(!category){
      return new NotFoundException('no category to update')
    }
    await this.categoryRepo.remove(category)
    return {
      status: 200,
      message: 'successfully deleted'
    }
  }
}
