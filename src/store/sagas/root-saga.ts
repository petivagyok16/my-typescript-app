import { all } from 'redux-saga/effects';

import productsSaga from '../products/products.sagas';
import cartSaga from '../cart/cart.sagas';

export function* rootSaga() {
  yield all([productsSaga(), cartSaga()]);
}

export default rootSaga;