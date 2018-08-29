export class MainProduct{
  constructor(
      public id: string,
      public itemName: string,
      public itemImg: string,
      public quantity: number,
      public cost: Cost,
      public filters: Filters
  ) {}
}

export class Cost{
  constructor(
    public itemCost: number,
    public specificCost: number
  ){}
}

export class Filters{
  constructor(
    public category: string, // i.e meat
    public productType: string // i.e citrus
  ){}
}
