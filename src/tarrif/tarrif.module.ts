import { Module } from '@nestjs/common';
import { TarrifController } from './tarrif.controller';
import { TarrifService } from './tarrif.service';

@Module({
  controllers: [TarrifController],
  providers: [TarrifService],
})
export class TarrifModule {}
