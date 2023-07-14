import { put, select, takeEvery, takeLatest } from 'redux-saga/effects';

import { CartState, cartActions } from './cart.slice';
import { RootState } from '../store';

function* saveCartToLocalStorageSaga() {
  try {
    const cartState: CartState = yield select((state: RootState) => state.cart);
    yield localStorage.setItem('cart', JSON.stringify(cartState));
  } catch (error) {
    console.error(error);
  }
}

function* loadCartFromLocalStorageSaga() {
  try {
    const cartJson = localStorage.getItem('cart');

    if (cartJson) {
      const cart: CartState = JSON.parse(cartJson);
      yield put(cartActions.loadCartItemsFromLocalStorageSuccess(cart));
    }
  } catch (error) {
    console.error('Error loading cart from local storage:', error);
  }
}

export function* cartSaga() {
  yield takeLatest(cartActions.loadCartItemsFromLocalStorage.type, loadCartFromLocalStorageSaga);
  yield takeEvery([cartActions.addItemToCart.type, cartActions.removeItemFromCart.type], saveCartToLocalStorageSaga);

}

export default cartSaga;