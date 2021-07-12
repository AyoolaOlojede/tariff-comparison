import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { TarrifService } from './tarrif.service';

@Controller('api/tarrif')
export class TarrifController {
  constructor(private readonly tarrifService: TarrifService) {}

  @Get('compare-products-by-consumption/:consumption')
  async compareProductsByAnnualCosts(@Param('consumption') consumption) {
    const result = await this.tarrifService.compareProducts(consumption);

    if (!result) {
      throw new HttpException('product not found', HttpStatus.NOT_FOUND);
    }

    return result;
  }
}
