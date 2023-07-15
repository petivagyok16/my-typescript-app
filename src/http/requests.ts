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

export default fetchProductItems;