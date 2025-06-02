import { Controller, Get, Query } from '@nestjs/common';
import { TemporalService } from '../temporal.service';

@Controller('temporal')
export class TemporalController {
  constructor(private readonly temporalService: TemporalService) {}

  @Get('run')
  async runWorkflow(@Query('name') name: string) {
    return this.temporalService.startExampleWorkflow(name);
  }
}
