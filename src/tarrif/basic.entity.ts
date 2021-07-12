import { BaseEntity } from './base.entity';
export class BasicProduct extends BaseEntity {
  public monthlyCost: number;
  public consumptionCost: number;
  private totalMonths = 12;

  constructor(
    public product: string,
    public cost: number,
    public consumption: number,
  ) {
    super(product);
    this.productName = product;
    this.consumptionCost = consumption;
    this.monthlyCost = cost;
  }
  calculateCost(kwh: number) {
    return this.monthlyCost * this.totalMonths + this.consumptionCost * kwh;
  }
}
