import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';

import { OrderingService } from './ordering.service';
import { OrderCreateInput } from '@aso/api-order-generated-db-types';
//import { JwtRmqAuthGuard } from '@aso/util-identity';

@Controller('ordering')
export class OrderingController {
  constructor(private readonly orderingService: OrderingService) {}

  @Post('place-order')
  //@UseGuards(JwtRmqAuthGuard)
  async placeOrder(@Body() order: OrderCreateInput, @Req() req: any) {
    return this.orderingService.placeOrder(order, req.cookies?.Authentication);
  }
}
