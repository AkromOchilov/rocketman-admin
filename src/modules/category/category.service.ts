import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { UpdateCategoryStatusDto } from './dto/update-category-status.dto';

@Injectable()
export class CategoryService {
  constructor(@InjectRepository(Category) private readonly categoryRepo: Repository<Category>){}
  async create(createCategoryDto: CreateCategoryDto) {
    let newCategory = this.categoryRepo.create(createCategoryDto);
    await this.categoryRepo.save(newCategory)
    return {
      status: HttpStatus.CREATED,
      message: "created category",
      data: newCategory
    }
  }

  async findAll() {
    let categories = await this.categoryRepo.find({relations: ['stores']});
    return {
      status: HttpStatus.OK,
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
      status: HttpStatus.OK,
      message: 'category by id',
      data: [category]
    }
  }

  async updateCategory(id: number, updateCategoryDto: UpdateCategoryDto) {
    let category = await this.categoryRepo.findOne({where: {id}})
    if(!category){
      return new NotFoundException('no category to update')
    }
    await this.categoryRepo.update(id, updateCategoryDto)
    category.category_name = updateCategoryDto.category_name || category.category_name
    category.status = updateCategoryDto.status
    await this.categoryRepo.save(category)
    return {
      status: HttpStatus.OK,
      message: 'updated category',
    }
  }

  async updateCategoryStatus(id: number, updateCategoryStatusDto: UpdateCategoryStatusDto) {
    let category = await this.categoryRepo.findOne({where: {id}})
    if(!category){
      return new NotFoundException('no category found')
    }
    category.status = updateCategoryStatusDto.status
    await this.categoryRepo.save(category)
    return {
      status: HttpStatus.OK,
      message: 'updated status'
    }
  }

  async remove(id: number) {
    let category = await this.categoryRepo.findOne({where: {id}})
    if(!category){
      return new NotFoundException('no category found')
    }
    await this.categoryRepo.remove(category)
    return {
      status: HttpStatus.OK,
      message: 'successfully deleted'
    }
  }
}
