import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RequestState } from "../../constants/request-states.constant";
import { RootState } from "../store";
import { ProductItemDto } from "../../interfaces/product-item-dto.interface";

export interface NewProductState {
  readonly requestState: RequestState;
  readonly error: string | null;
}

const initialState: NewProductState = {
  requestState: RequestState.IDLE,
  error: null
};

const newProductSlice = createSlice({
  name: 'new-product',
  initialState,
  reducers: {
    addNewProduct: (state, _: PayloadAction<ProductItemDto>) => {
      state.requestState = RequestState.PENDING;
    },
    addNewProductSuccess: (state) => {
      state.requestState = RequestState.RESOLVED;
    },
    addNewProductError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.requestState = RequestState.REJECTED;
    },
    resetNewProductFlow: (state) => {
      state.requestState = RequestState.IDLE;
      state.error = null;
    },
  }
});

export const newProductReducer = newProductSlice.reducer;
export const newProductActions = newProductSlice.actions;
export const selectNewProductState = (state: RootState) => state.newProduct;
export const selectIsNewProductLoading = (state: NewProductState) => state.requestState === RequestState.PENDING;
export const selectIsNewProductSuccess = (state: NewProductState) => state.requestState === RequestState.RESOLVED;