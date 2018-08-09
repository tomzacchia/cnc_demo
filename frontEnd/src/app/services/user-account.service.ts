import { Subject } from "rxjs";


export class UserAccountService{
    
    public userType = 'user';

    shopSelectedEvent: Subject<boolean>;

    constructor( 
        private shopName: string,
        private shopSelectedFlag: boolean,
        private signedInFlag: boolean
    ){ }

    setShopName(shopName: string){
        this.shopName = shopName;
        this.shopSelectedEvent.next(true);
    }

}