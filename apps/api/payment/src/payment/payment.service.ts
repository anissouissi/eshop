import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class PaymentService {
  private readonly logger = new Logger(PaymentService.name);

  processPayment(data: any) {
    this.logger.log('Processing payment...', data);
  }
}
