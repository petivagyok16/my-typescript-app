import { all } from 'redux-saga/effects';

import productsSaga from '../products/products.sagas';
import cartSaga from '../cart/cart.sagas';
import newProductSaga from '../new-product/new-product.sagas';

export function* rootSaga() {
  yield all([productsSaga(), cartSaga(), newProductSaga()]);
}

export default rootSaga;