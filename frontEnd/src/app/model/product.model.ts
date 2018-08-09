export class Product{
    constructor(
        public id: string, 
        public itemName: string, 
        public itemCost: number,
        public specificCost: number, 
        public itemImg: string, 
        public quantity: number
    ) {}

}