import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { PrismaModule } from '@aso/api-order-data-access-db';
import { RmqModule } from '@aso/util-rmq';
import { IDENTITY_SERVICE, PAYMENT_SERVICE, USER_SERVICE } from './services';
import { JwtStrategy } from '@aso/api-feature-identity';

@Module({
  providers: [OrderResolver, OrderService, JwtStrategy],
  imports: [
    PrismaModule,
    RmqModule.register({ name: PAYMENT_SERVICE }),
    RmqModule.register({ name: USER_SERVICE }),
    RmqModule.register({ name: IDENTITY_SERVICE }),
  ],
})
export class OrderModule {}
