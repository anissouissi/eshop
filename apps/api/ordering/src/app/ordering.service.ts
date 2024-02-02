import { Inject, Injectable } from '@nestjs/common';
import { PAYMENT_SERVICE } from '../constants/services';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { OrderCreateInput } from '@aso/api-order-generated-db-types';

@Injectable()
export class OrderingService {
  constructor(@Inject(PAYMENT_SERVICE) private paymentClient: ClientProxy) {}

  async placeOrder(order: OrderCreateInput, authentication: string) {
    await lastValueFrom(
      this.paymentClient.emit('order_placed', {
        payment: order.payment,
        Authentication: authentication,
      })
    );
    return { message: 'Hello API' };
  }
}
