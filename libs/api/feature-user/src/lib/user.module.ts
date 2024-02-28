import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaModule } from '@aso/api-identity-data-access-db';
import { UserController } from './user.controller';
import { RmqModule } from '@aso/util-rmq';
import { USER_SERVICE } from './services';

@Module({
  controllers: [UserController],
  providers: [UserResolver, UserService],
  imports: [PrismaModule, RmqModule.register({ name: USER_SERVICE })],
  exports: [RmqModule],
})
export class UserModule {}
