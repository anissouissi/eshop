import { User } from '@aso/api-identity-generated-db-types';
import {
  AuthService,
  CurrentUser,
  LocalAuthGuard,
  JwtAuthGuard,
} from '@aso/util-identity';
import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @CurrentUser() user: User,
    @Res({ passthrough: true }) response: Response
  ) {
    await this.authService.login(user, response);
    response.send(user);
  }

  @Post('create')
  async create(
    @Body() user: { name: string; email: string; password: string },
    @Res({ passthrough: true }) response: Response
  ) {
    const createdUser = await this.authService.createUser(user);
    return this.login({ ...createdUser, password: user.password }, response);
  }

  @Get('logout')
  async logout(@Res({ passthrough: true }) response: Response) {
    this.authService.logout(response);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @MessagePattern('validate_user')
  async validateUser(@CurrentUser() user: User) {
    return user;
  }
}
