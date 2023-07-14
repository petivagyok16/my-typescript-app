import { ProductItemDto } from "../interfaces/product-item-dto.interface";
import { ProductItem } from "../interfaces/product-item.interface";

export const mapProductItemsDtoToProductItem = (productItems: ProductItemDto[]): ProductItem[] =>
  productItems.map((productItem: ProductItemDto, index: number) => ({
    id: index.toString(), // TODO
    title: productItem.title,
    description: productItem.description,
    price: productItem.price
  }));