import{ ShopInfoModel } from '../model/shop.model';

export class ShopService{
    
    shopsArray: ShopInfoModel[] = [
        new ShopInfoModel('Costco Wholesale', '(450) 444-4466', 'https://goo.gl/mzd3bm', '8am'),
        new ShopInfoModel('Another Goddam Costco', '(450) 444-4466', 'https://goo.gl/mzd3bm','8am')
    ]

}

// new ShopInfoModel('Costco Wholesale', '9430 Taschereau Blvd', 'Brossard','QC','J4X 2W2', '(450) 444-4466', 'https://goo.gl/mzd3bm','9:00am - 6:00pm','9:00am - 6:00pm','9:00am - 6:00pm','9:00am - 6:00pm','9:00am - 6:00pm','9:00am - 6:00pm','9:00am - 6:00pm')