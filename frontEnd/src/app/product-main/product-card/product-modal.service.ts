import { MainProduct } from '../../admin/product.model';

export class ProductCardModalService {

    product: MainProduct;

    loadProduct( productReceived: MainProduct) {
        this.product = productReceived;
    }

    getProduct() {
        return this.product;
    }
}
