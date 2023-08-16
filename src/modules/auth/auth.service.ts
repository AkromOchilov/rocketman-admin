import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(User) private readonly userRepo: Repository<User>,
  private readonly jwtService: JwtService){}

  async login({username, password}){
    let user = await this.userRepo.findOne({where: {username, password}})
    if(!user){
      return new UnauthorizedException()
    }
    let access_token = this.jwtService.sign({userId: user.id})
    delete user.password
    return {
      token: access_token,
      success: true,
      status: 200,
      data: user
    }
  }

}
