import { IsNumberString, IsString } from "class-validator";

export class UpdateProductDto {
  @IsString()
  readonly name: string;
  @IsNumberString()
  readonly price: number;
  @IsString()
  readonly urlImge: string;
  @IsNumberString()
  readonly percentDiscount: number;
}
