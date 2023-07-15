import { ProductItemDto } from "../interfaces/product-item-dto.interface";
import { FetchProductItemsResponse } from "../interfaces/fetch-product-items-response.interface";

export const fetchProductItems = (): Promise<FetchProductItemsResponse> =>
  fetch(
    'https://react-70620-default-rtdb.europe-west1.firebasedatabase.app/products.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }
  ).then((response) => response.json());

export const addNewProduct = (newProduct: ProductItemDto) =>
  fetch('https://react-70620-default-rtdb.europe-west1.firebasedatabase.app/products.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newProduct),
  }).then((response) => response.json());

export default fetchProductItems;