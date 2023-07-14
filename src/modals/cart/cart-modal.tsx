import React, { PropsWithChildren, ReactElement } from "react"
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store/store";
import { cartActions, selectCartItems, selectCartItemsSumPrice } from "../../store/cart/cart.slice";
import { CartItem as CartItemInput } from "../../interfaces/cart-item.interface";
import CartItem from "../../components/cart-item/cart-item";

import classes from './cart-modal.module.css';
import { formatPrice } from "../../utils/format-price.util";

const CartModal: React.FunctionComponent<PropsWithChildren> = (): ReactElement => {

  const dispatch = useDispatch();
  const cartState = useSelector((state: RootState) => state.cart);
  const cartItems = selectCartItems(cartState);
  const cartSumPrice = selectCartItemsSumPrice(cartState);
  const formattedCartSumPrice = formatPrice(cartSumPrice);

  const onRemoveItemFromCart = (cartItem: CartItemInput): void => {
    dispatch(cartActions.removeItemFromCart(cartItem));
  };

  return (
    <>
      <h1>Cart</h1>
      <ul className={classes['cart-items-list']}>
        {
          cartItems.map((item: CartItemInput) => {
            return (
              <CartItem key={item.id} cartItem={item} removeItemFromCart={onRemoveItemFromCart}/>
            )
          })
        }
      </ul>
      <p className={classes['cart-sum-price']}>Cart sum: { formattedCartSumPrice }</p>
    </>
  )
};

export default CartModal;
