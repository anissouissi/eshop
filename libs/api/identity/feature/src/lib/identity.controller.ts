import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Response } from 'express';
import { CurrentUser } from './current-user.decorator';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { IdentityService } from './identity.service';
import { User } from './dto/user';
import { SignUpInput } from './dto/sign-up-input';

@Controller()
export class IdentityController {
  constructor(private readonly identityService: IdentityService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(
    @CurrentUser() user: User,
    @Res({ passthrough: true }) response: Response
  ) {
    try {
      await this.identityService.login(user, response);
      response.send(user);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  @Post('sign-up')
  async signUp(
    @Body() user: SignUpInput,
    @Res({ passthrough: true }) response: Response
  ) {
    const createdUser = await this.identityService.signUp(user, response);
    return createdUser;
  }

  @Get('logout')
  async logout(@Res({ passthrough: true }) response: Response) {
    this.identityService.logout(response);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @MessagePattern('validate_user')
  async validateUser(@CurrentUser() user: User) {
    return user;
  }
}
