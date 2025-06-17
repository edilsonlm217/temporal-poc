import { Module } from '@nestjs/common';
import { DataSecrecyController } from './data-secrecy.controller';
import { DataSecrecyService } from './data-secrecy.service';

@Module({
  imports: [],
  controllers: [DataSecrecyController],
  providers: [DataSecrecyService],
  exports: [DataSecrecyService]
})
export class DataSecrecyModule { }
