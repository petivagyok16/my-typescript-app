import { ProductItem } from "../interfaces/product-item.interface";

export const fetchProductItems = (): Promise<readonly ProductItem[]> =>
  fetch(
    'https://react-70620-default-rtdb.europe-west1.firebasedatabase.app/products.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }
  ).then((response) => response.json());

// export const addCartItem = (cartItem: CartItem) =>
//   fetch('https://react-70620-default-rtdb.europe-west1.firebasedatabase.app/cart-items.json', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(cartItem),
//   }).then((response) => response.json());

// export const removeCartItemById = ({ key }) =>
//   fetch(`https://react-70620-default-rtdb.europe-west1.firebasedatabase.app/products/${key}.json`, {
//     method: 'DELETE',
//   }).then((response) => response.json());

export default fetchProductItems;