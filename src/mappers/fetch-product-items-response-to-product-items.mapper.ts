import { FetchProductItemsResponse } from "../interfaces/fetch-product-items-response.interface";
import { ProductItem } from "../interfaces/product-item.interface";

export const mapFetchProductItemsResponseToProductItems = (fetchProductItemsResponse: FetchProductItemsResponse ): ProductItem[] =>
  Object.keys(fetchProductItemsResponse).map((key: string) => {
    return {
      id: key,
      title: fetchProductItemsResponse[key].title,
      description: fetchProductItemsResponse[key].description,
      price: Number(fetchProductItemsResponse[key].price),
    }
  });
