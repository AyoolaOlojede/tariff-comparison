import { Injectable, Get } from '@nestjs/common';
import { BasicProduct } from './basic.entity';
import { PackagedProduct } from './packaged.entity';
import { BaseEntity } from './base.entity';

@Injectable()
export class TarrifService {
  private products: Array<BaseEntity> = [];
  private basic: BasicProduct;
  private packaged: PackagedProduct;
  constructor() {
    this.basic = new BasicProduct('basic electricity tariff', 5, 0.22);
    this.packaged = new PackagedProduct('Packaged tariff', 800, 0.3);
    this.products.push(this.basic);
    this.products.push(this.packaged);
  }
  compareProducts(kwh: number): any {
    return this.products
      .map((product) => ({
        tarrifName: product.getProductName(),
        annualCost: product.calculateCost(kwh),
      }))
      .sort((a, b) => (a.annualCost > b.annualCost ? 1 : -1));
  }
}
