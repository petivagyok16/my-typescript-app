import { CartItem } from "../interfaces/cart-item.interface";
import { ProductItem } from "../interfaces/product-item.interface";

export const mapProductItemToCartItem = (productItem: ProductItem): CartItem => {
  return {
    id: productItem.id,
    title: productItem.title,
    description: productItem.description,
    price: productItem.price,
    count: 1,
  }
}