import { Test, TestingModule } from '@nestjs/testing';
import { TarrifController } from './tarrif.controller';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { TarrifService } from './tarrif.service';

describe('TarrifController', () => {
  let tarrifcontroller: TarrifController;
  let tarrifService: TarrifService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TarrifController],
      providers: [TarrifService],
    }).compile();

    tarrifService = module.get<TarrifService>(TarrifService);
    tarrifcontroller = module.get<TarrifController>(TarrifController);
  });
  it('compare @ 3500 kWh/year', async () => {
    const result = tarrifService.compareProducts(3500);
    jest
      .spyOn(tarrifService, 'compareProducts')
      .mockImplementation(() => result);

    expect(await tarrifcontroller.compareProductsByAnnualCosts(3500)).toBe(
      result,
    );
  });
  it('compare @ 4500 kWh/year', async () => {
    const result = tarrifService.compareProducts(4500);
    jest
      .spyOn(tarrifService, 'compareProducts')
      .mockImplementation(() => result);

    expect(await tarrifcontroller.compareProductsByAnnualCosts(3500)).toBe(
      result,
    );
  });
  it('compare @ 6000 kWh/year', async () => {
    const result = tarrifService.compareProducts(6000);
    jest
      .spyOn(tarrifService, 'compareProducts')
      .mockImplementation(() => result);

    expect(await tarrifcontroller.compareProductsByAnnualCosts(6000)).toBe(
      result,
    );
  });
});
