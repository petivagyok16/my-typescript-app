import React, { PropsWithChildren, ReactElement } from "react"
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store/store";
import { cartActions, selectCartItems, selectCartItemsSumPrice } from "../../store/cart/cart.slice";
import { CartItem as CartItemType } from "../../interfaces/cart-item.interface";
import CartItem from "../../components/cart-item/cart-item";

import classes from './cart-modal.module.css';
import { formatPrice } from "../../utils/format-price.util";

const CartModal: React.FunctionComponent<PropsWithChildren> = (): ReactElement => {

  const dispatch = useDispatch();
  const cartState = useSelector((state: RootState) => state.cart);
  const cartItems = selectCartItems(cartState);
  const cartSumPrice = selectCartItemsSumPrice(cartState);
  const formattedCartSumPrice = formatPrice(cartSumPrice);

  const onRemoveItemFromCart = (cartItem: CartItemType): void => {
    dispatch(cartActions.removeItemFromCart(cartItem));
  };

  return (
    <>
      <ul className={classes['cart-items-list']}>
        {
          cartItems.map((item: CartItemType) => {
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
