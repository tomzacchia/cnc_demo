import{ ShopInfoModel } from '../model/shop.model';

const store1 = 'assets/images/store1.jpeg';
const store2 = 'assets/image/store2.jpeg';

export class ShopService{

    shopsArray: ShopInfoModel[] = [
        new ShopInfoModel('Generic Store 1', '(450) 123-4567', 'https://image.ibb.co/nDZek9/store2.jpg', '8am'),
        new ShopInfoModel('Generic Store 2', '(450) 123-4568', 'https://image.ibb.co/dsqwXp/store1.jpg','8am')
    ]

}
