export declare enum SizeGlass {
    '350ml' = "350ml",
    '250ml' = "250ml",
    '500ml' = "Size M",
    '700ml' = "Size L"
}
declare class MoreCombina {
    option: string;
    price: number;
}
declare class PropertyProduct {
    isHidden: boolean;
    isCheese: boolean;
    isColdess: boolean;
    isIces: boolean;
    isSugars: boolean;
}
declare class Nutritional {
    kcal: number;
    water: number;
    vitamin: number;
}
declare class RickText {
    intro: string;
    userManual?: string;
    preserve?: string[];
}
declare class Signature {
    photo: string;
    backGround: string;
    description: string;
}
declare class MlAndPrice {
    ml: string;
    price: number;
}
declare class LabelBtn {
    label: string;
    to: string;
}
declare class Qoute {
    top: string;
    bottom: string;
}
declare class AboutProduct {
    title?: string;
    label: string;
    qoue?: Qoute;
    description1: string;
    labelBtn?: LabelBtn[];
    photo: string;
    photoPosition?: 'left' | 'right';
    isShowSmallCarousel?: boolean;
    textAlign?: 'left' | 'right';
}
export declare class CreateProductDto {
    name: string;
    mainIngredient: string;
    photo: string[];
    hasTag: string;
    moreCombina: MoreCombina[];
    sugars: string[];
    property?: PropertyProduct;
    group: string;
    rickText: RickText;
    signature?: Signature;
    aboutProduct: AboutProduct[];
    mlAndPrice: MlAndPrice[];
    nutritional: Nutritional;
}
export {};
