import { Controller, UseGuards } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService } from '@aso/util-rmq';
//import { JwtRmqAuthGuard } from '@aso/util-identity';

@Controller('payment')
export class PaymentController {
  constructor(
    private readonly paymentService: PaymentService,
    private readonly rmqService: RmqService
  ) {}

  @EventPattern('order_placed')
  //@UseGuards(JwtRmqAuthGuard)
  async handleOrderPlaced(@Payload() data: any, @Ctx() context: RmqContext) {
    this.paymentService.processPayment(data);
    this.rmqService.ack(context);
  }
}
