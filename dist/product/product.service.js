"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const product_schemas_1 = require("./schemas/product.schemas");
const mongoose_2 = require("mongoose");
let ProductService = class ProductService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async findAll() {
        const products = await this.productModel.find();
        console.log(products);
        return products;
    }
    async createProduct(product) {
        const res = await this.productModel.create(product);
        return res;
    }
    async getProductId(id) {
        const product = await this.productModel.findById(id);
        if (!product) {
            throw new common_1.NotFoundException('Product not found.');
        }
        return product;
    }
    async updateProduct(id, product) {
        return await this.productModel.findByIdAndUpdate(id, product, {
            new: true,
            runValidators: true,
        });
    }
    async deleteProduct(id) {
        return await this.productModel.findByIdAndDelete(id);
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(product_schemas_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map