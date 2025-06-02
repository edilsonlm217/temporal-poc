import { Controller, Get, Query } from '@nestjs/common';
import { TemporalService } from './temporal.service';

@Controller('temporal')
export class TemporalController {
  constructor(private readonly temporalService: TemporalService) {}

  @Get('run')
  async runWorkflow(
    @Query('type') type: string,
    @Query('name') name: string,
  ) {
    return this.temporalService.dispatchWorkflow({ type, name });
  }
}
