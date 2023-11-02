import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
  timestamps: true,
})
export class Product {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  urlImge: string;

  @Prop()
  percentDiscount: number;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
