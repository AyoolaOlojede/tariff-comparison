import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TarrifModule } from './tarrif/tarrif.module';
import { TarrifService } from './tarrif/tarrif.service';

@Module({
  imports: [TarrifModule],
  controllers: [AppController],
  providers: [AppService, TarrifService],
})
export class AppModule {}
