import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderingService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}
