import { Product } from './schemas/product.schemas';
import { Model } from 'mongoose';
export declare class ProductService {
    private productModel;
    constructor(productModel: Model<Product>);
    findAll(): Promise<Product[]>;
    createProduct(product: Product): Promise<Product>;
    getProductId(id: string): Promise<Product>;
    updateProduct(id: string, product: Product): Promise<Product>;
    deleteProduct(id: string): Promise<Product>;
}
