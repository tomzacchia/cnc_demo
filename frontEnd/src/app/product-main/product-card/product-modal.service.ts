import { Product } from '../../model/product.model';

export class ProductCardModalService {

    product: Product;

    loadProduct( productReceived: Product) {
        this.product = productReceived;
    }

    getProduct() {
        return this.product;
    }
}
