import { Product } from '../model/product.model';

export class UserCartService {

    private userItems: Product[] = [];

    // Populating userItems array
    addItem(item: Product){
        if (!this.userItems.find(tempItem => tempItem.id == item.id) ) {
            this.userItems.push(item);
        }
        // this.userItems.push(item);
    }

    // returns copy of userItems
    getUserItems(){
        return this.userItems.slice();
    }

    // method to remove item from userCart
    removeItem(id: string){
        let item = this.userItems.find( item => item.id == id );
        let index = this.userItems.indexOf(item);
        this.userItems.splice(index,1);
    }
}
