import { put, takeLatest, call } from 'redux-saga/effects';

import { productsActions } from './products.slice';
import fetchProductItems from '../../http/requests';
import { ProductItem } from '../../interfaces/product-item.interface';
import { mapProductItemsDtoToProductItem } from '../../mappers/product-items-dto-to-product-item.mapper';
import { ProductItemDto } from '../../interfaces/product-item-dto.interface';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

function* fetchProductsSaga() {
  try {
    yield delay(1000);

    const productItemsDto: ProductItemDto[] = yield call(fetchProductItems);
    const productItems: ProductItem[] = mapProductItemsDtoToProductItem(productItemsDto);

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