import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas/root-saga';
import { productsReducer } from './products/products.slice';
import { cartReducer } from './cart/cart.slice';
import { newProductReducer } from './new-product/new-product.slice';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  newProduct: newProductReducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;