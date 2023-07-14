import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ProductItem } from "../../interfaces/product-item.interface";
import { RootState } from "../store";
import { RequestState } from "../../constants/request-states.constant";

export interface ProductsState {
  readonly requestState: RequestState;
  readonly products: readonly ProductItem[];
  readonly error: string | null;
}

const initialState: ProductsState = {
  requestState: RequestState.IDLE,
  products: [],
  error: null
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProducts: (state) => {
      state.requestState = RequestState.PENDING;
    },
    fetchProductsSuccess: (state, action: PayloadAction<ProductItem[]>) => {
      state.products = action.payload
      state.requestState = RequestState.RESOLVED;
    },
    fetchProductsError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.requestState = RequestState.REJECTED;
    }
  }
});

export const productsReducer = productsSlice.reducer;
export const productsActions = productsSlice.actions;
export const selectProductsState = (state: RootState) => state.products;
export const selectProducts = (state: ProductsState) => state.products;
export const selectIsProductsLoading = (state: ProductsState) => state.requestState === RequestState.PENDING;