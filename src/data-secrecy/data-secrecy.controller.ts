import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { DataSecrecyService } from './data-secrecy.service';
import { DataSecrecyRequestDto } from 'src/common/interfaces/data-secrecy.interface';
import { log } from '@meta-commons/ts-log';

@Controller('data-secrecy')
export class DataSecrecyController {
  constructor(private readonly dataSecrecyService: DataSecrecyService) {}
  
  @Post()
  @HttpCode(HttpStatus.ACCEPTED)
  async createRequest(@Body() payload: DataSecrecyRequestDto) {
    await this.dataSecrecyService.enqueueRequest(payload);
    return {
      status: 'queued',
      requestId: payload.requestId,
    };
  }
}
