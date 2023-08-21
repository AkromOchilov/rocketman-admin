import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtAuthGuard } from './guards/jwt.guards';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Get()
  getAll(){
    return this.authService.getAll();
  }

  @Post('login')
  async register(@Body() body: LoginDto) {
    try {
      let newAdmin = await this.authService.login(body);
      return newAdmin
    } catch (error) {
      return {
        status: 400,
        message: error.message
      }
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('register')
  login(@Body() body: RegisterDto) {
    return this.authService.register(body)
  }
}