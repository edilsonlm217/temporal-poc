import { Module } from '@nestjs/common';
import { TemporalController } from './temporal.controller';
import { TemporalService } from './temporal.service';

@Module({
  providers: [TemporalService],
  controllers: [TemporalController],
  exports: [TemporalService],
})
export class TemporalModule {}
