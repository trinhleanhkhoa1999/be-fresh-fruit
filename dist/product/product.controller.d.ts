import { ProductService } from './product.service';
import { Product } from './schemas/product.schemas';
import { CreateProductDto, UpdateProductDto } from './dto';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    findAll(): Promise<Product[]>;
    createProduct(product: CreateProductDto): Promise<Product>;
    getProductId(id: string): Promise<Product>;
    updateProduct(id: string, product: UpdateProductDto): Promise<Product>;
    deleteProduct(id: string): Promise<Product>;
}
