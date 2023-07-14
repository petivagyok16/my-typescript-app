import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { ProductItem } from "../../interfaces/product-item.interface";
import { CartItem } from "../../interfaces/cart-item.interface";
import { mapProductItemToCartItem } from "../../mappers/product-item-to-cart-item.mapper";

export interface CartState {
  readonly items: CartItem[];
  readonly itemCount: number;
  readonly sumPrice: number;
}

const initialState: CartState = {
  items: [],
  itemCount: 0,
  sumPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, { payload }: PayloadAction<ProductItem>) => {
      state.itemCount += 1;
      state.sumPrice += payload.price;

      const cartItem = mapProductItemToCartItem(payload);

      let existingCartItem = state.items.find(cartItem => cartItem.id === payload.id);

      if (existingCartItem) {
        existingCartItem.count += 1;
        return;
      }

      state.items.unshift(cartItem);

    },

    removeItemFromCart: (state, { payload }: PayloadAction<CartItem>) => {
      let existingCartItem = state.items.find(cartItem => cartItem.id === payload.id);

      if (existingCartItem && existingCartItem.count > 1) {
        existingCartItem.count -= 1;
        state.itemCount -= 1;
        state.sumPrice -= payload.price;
        return;
      }

      state.itemCount -= 1;
      state.sumPrice -= payload.price;
      state.items = state.items.filter(cartItem => cartItem.id !== payload.id);
    },

    loadCartItemsFromLocalStorage: () => {},
    loadCartItemsFromLocalStorageSuccess: (state, { payload }: PayloadAction<CartState>) => {
      state.items = payload.items;
      state.itemCount = payload.itemCount;
      state.sumPrice = payload.sumPrice;
    }
  }
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
export const selectCartState = (state: RootState) => state.cart;
export const selectCartItems = (state: CartState) => state.items;
export const selectCartItemsCount = (state: CartState) => state.itemCount;
export const selectCartItemsSumPrice = (state: CartState) => state.sumPrice;