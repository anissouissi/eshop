import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { RmqModule } from '@aso/util-rmq';
import { IDENTITY_SERVICE } from '../services';

@Module({
  imports: [RmqModule, RmqModule.register({ name: IDENTITY_SERVICE })],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
