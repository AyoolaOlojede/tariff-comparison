import { BaseEntity } from './base.entity';

export class PackagedProduct extends BaseEntity {
  public baseCost: number;
  public consumptionCost: number;
  private kilowatts = 4000;
  constructor(
    public product: string,
    public cost: number,
    public consumption: number,
  ) {
    super(product);
    this.productName = product;
    this.consumptionCost = consumption;
    this.baseCost = cost;
  }
  calculateCost(kwh: number) {
    if (kwh <= this.kilowatts) {
      return this.baseCost;
    }
    return this.baseCost + (kwh - this.kilowatts) * this.consumptionCost;
  }
}
