import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';

@Controller('payment')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @EventPattern('get_user')
  async handleGetUser(@Payload() data: any) {
    const user = await this.userService.findOne({
      where: { email: data.email },
    });
    return user;
  }

  @EventPattern('create_user')
  async handleCreateUser(@Payload() data: any) {
    const user = await this.userService.create({ data });
    return user;
  }
}
