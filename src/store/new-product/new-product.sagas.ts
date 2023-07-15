import { put, takeLatest, call } from 'redux-saga/effects';

import { newProductActions } from './new-product.slice';
import { addNewProduct } from '../../http/requests';
import { ProductItem } from '../../interfaces/product-item.interface';
import { ProductItemDto } from '../../interfaces/product-item-dto.interface';
import { PayloadAction } from '@reduxjs/toolkit';
import { productsActions } from '../products/products.slice';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

function* addNewProductSaga(action: PayloadAction<ProductItemDto>) {
  try {
    yield delay(1000);

    const newProductId: string = yield call(addNewProduct, action.payload);
    const newProductItem: ProductItem = {
      id: newProductId,
      ...action.payload,
    }

    yield put(newProductActions.addNewProductSuccess());
    yield put(productsActions.addNewProductSuccess(newProductItem));
  } catch (error) {
    console.error('Error adding new product item:', error);
    yield put(newProductActions.addNewProductError('error fetching product items'));
  }
}

export function* newProductSaga() {
  yield takeLatest(newProductActions.addNewProduct.type, addNewProductSaga);
}

export default newProductSaga;