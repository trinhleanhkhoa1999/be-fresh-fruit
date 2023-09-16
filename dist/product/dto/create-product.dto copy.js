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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductDto = exports.SizeGlass = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
var SizeGlass;
(function (SizeGlass) {
    SizeGlass["350ml"] = "350ml";
    SizeGlass["250ml"] = "250ml";
    SizeGlass["500ml"] = "Size M";
    SizeGlass["700ml"] = "Size L";
})(SizeGlass = exports.SizeGlass || (exports.SizeGlass = {}));
class MoreCombina {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MoreCombina.prototype, "option", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", Number)
], MoreCombina.prototype, "price", void 0);
class PropertyProduct {
}
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PropertyProduct.prototype, "isHidden", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PropertyProduct.prototype, "isCheese", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PropertyProduct.prototype, "isColdess", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PropertyProduct.prototype, "isIces", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PropertyProduct.prototype, "isSugars", void 0);
class Nutritional {
}
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", Number)
], Nutritional.prototype, "kcal", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", Number)
], Nutritional.prototype, "water", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", Number)
], Nutritional.prototype, "vitamin", void 0);
class RickText {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RickText.prototype, "intro", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.ValidateIf)((object, value) => value !== null),
    __metadata("design:type", String)
], RickText.prototype, "userManual", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", Array)
], RickText.prototype, "preserve", void 0);
class Signature {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.ValidateIf)((object, value) => value !== null),
    __metadata("design:type", String)
], Signature.prototype, "photo", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((object, value) => value !== null),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Signature.prototype, "backGround", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((object, value) => value !== null),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Signature.prototype, "description", void 0);
class MlAndPrice {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(SizeGlass),
    __metadata("design:type", String)
], MlAndPrice.prototype, "ml", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", Number)
], MlAndPrice.prototype, "price", void 0);
class LabelBtn {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LabelBtn.prototype, "label", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LabelBtn.prototype, "to", void 0);
class Qoute {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.NotEquals)(null),
    (0, class_validator_1.ValidateIf)((object, value) => value !== null),
    __metadata("design:type", String)
], Qoute.prototype, "top", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.NotEquals)(null),
    (0, class_validator_1.ValidateIf)((object, value) => value !== null),
    __metadata("design:type", String)
], Qoute.prototype, "bottom", void 0);
class AboutProduct {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AboutProduct.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AboutProduct.prototype, "label", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Qoute),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", Qoute)
], AboutProduct.prototype, "qoue", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AboutProduct.prototype, "description1", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => LabelBtn),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    __metadata("design:type", Array)
], AboutProduct.prototype, "labelBtn", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AboutProduct.prototype, "photo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AboutProduct.prototype, "photoPosition", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], AboutProduct.prototype, "isShowSmallCarousel", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AboutProduct.prototype, "textAlign", void 0);
class CreateProductDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Coca Cola',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "mainIngredient", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '998',
    }),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateProductDto.prototype, "photo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "hasTag", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => MoreCombina),
    (0, swagger_1.ApiProperty)({
        example: [
            {
                option: 'Ổi x Lê',
                price: 10000,
            },
        ],
    }),
    __metadata("design:type", Array)
], CreateProductDto.prototype, "moreCombina", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, swagger_1.ApiProperty)({
        example: ['100% Đường (Bình Thường)', '50% Đường (Ít Ngọt)'],
    }),
    __metadata("design:type", Array)
], CreateProductDto.prototype, "sugars", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PropertyProduct),
    (0, swagger_1.ApiProperty)({
        example: {
            isHidden: false,
            isCheese: false,
            isColdess: false,
            isIces: false,
            isSugars: false,
        },
    }),
    __metadata("design:type", PropertyProduct)
], CreateProductDto.prototype, "property", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "group", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => RickText),
    (0, swagger_1.ApiProperty)({
        example: 'Sinh Tố Đóng Chai',
    }),
    __metadata("design:type", RickText)
], CreateProductDto.prototype, "rickText", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Signature),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Signature)
], CreateProductDto.prototype, "signature", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_transformer_1.Type)(() => AboutProduct),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], CreateProductDto.prototype, "aboutProduct", void 0);
__decorate([
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => MlAndPrice),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], CreateProductDto.prototype, "mlAndPrice", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Nutritional),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Nutritional)
], CreateProductDto.prototype, "nutritional", void 0);
exports.CreateProductDto = CreateProductDto;
//# sourceMappingURL=create-product.dto%20copy.js.map