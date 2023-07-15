import { put, takeLatest, call } from 'redux-saga/effects';

import { productsActions } from './products.slice';
import fetchProductItems from '../../http/requests';
import { ProductItem } from '../../interfaces/product-item.interface';
import { FetchProductItemsResponse } from '../../interfaces/fetch-product-items-response.interface';
import { mapFetchProductItemsResponseToProductItems } from '../../mappers/fetch-product-items-response-to-product-items.mapper';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

function* fetchProductsSaga() {
  try {
    yield delay(1000);

    const productItemsDtoMap: FetchProductItemsResponse = yield call(fetchProductItems);

    const productItems: ProductItem[] = mapFetchProductItemsResponseToProductItems(productItemsDtoMap);

    yield put(productsActions.fetchProductsSuccess(productItems));
  } catch (error) {
    console.error('Error fetching product items:', error);
    yield put(productsActions.fetchProductsError('error fetching product items'));
  }
}

export function* productsSaga() {
  yield takeLatest(productsActions.fetchProducts.type, fetchProductsSaga);
}

export default productsSaga;