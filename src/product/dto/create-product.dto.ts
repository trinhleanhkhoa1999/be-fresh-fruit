import { ApiProperty } from "@nestjs/swagger";
import { IsNumberString, IsString } from "class-validator";

export class CreateProductDto {
  @ApiProperty({
    example: "Coca Cola",
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    example: "url img",
  })
  @IsString()
  readonly urlImge: string;
  @IsNumberString()
  @ApiProperty({
    example: "998",
  })
  readonly price: number;
  @IsNumberString()
  @ApiProperty({
    example: "10",
  })
  readonly percentDiscount: number;
}
