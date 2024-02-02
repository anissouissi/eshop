import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { RmqModule } from '@aso/util-rmq';
//import { AuthModule } from '@aso/util-identity';

@Module({
  imports: [
    RmqModule,
    //, AuthModule
  ],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
