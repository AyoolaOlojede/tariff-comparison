export class BaseEntity {
  public productName: string;
  public constructor(public product: string) {
    this.productName = product;
  }

  getProductName(): string {
    return this.productName;
  }

  calculateCost(kwh: number) {
    return 0;
  }
}
