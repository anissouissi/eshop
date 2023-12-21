import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { PrismaModule } from '@aso/api-catalog-data-access-db';

@Module({
  imports: [PrismaModule, TerminusModule],
  controllers: [HealthController],
})
export class HealthModule {}
