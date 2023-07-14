import { fork, all } from 'redux-saga/effects';
import productsSaga from '../products/products.sagas';
import cartSaga from '../cart/cart.sagas';

export function* rootSaga() {
  yield all([fork(productsSaga), fork(cartSaga)]); // TODO: jo igy ez?
}

export default rootSaga;