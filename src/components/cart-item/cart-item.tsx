import React, { PropsWithChildren, ReactElement } from "react"

import { CartItem as CartItemInput } from "../../interfaces/cart-item.interface";
import Card from "../../ui-components/card/card";
import classes from './cart-item.module.css';
import { formatPrice } from "../../utils/format-price.util";

interface CartItemProps extends PropsWithChildren {
  readonly cartItem: CartItemInput; // TODO: name collision?
  readonly removeItemFromCart: (cartItem: CartItemInput) => void;
}

const CartItem: React.FunctionComponent<CartItemProps> = (props): ReactElement => {

  const formattedPrice = formatPrice(props.cartItem.price);
  const sumPrice = props.cartItem.count * props.cartItem.price;
  const formattedSumPrice = formatPrice(sumPrice);

  const onRemoveFromCartHandler = (event: React.MouseEvent): void => {
    event.stopPropagation();
    props.removeItemFromCart(props.cartItem);
  };

  return (
    <>
      <li>
        <Card>
          <div className={classes['cart-item-body-wrapper']}>
            <p>{ props.cartItem.title }</p>
            <p>Price: { formattedPrice } </p>
            <p>{props.cartItem.count} pieces, <span className={classes['sum-price']}>sum: ({ formattedSumPrice })</span></p>
            <button className={classes['delete-cart-item-button']} onClick={onRemoveFromCartHandler}>Remove</button>
          </div>
        </Card>
      </li>
    </>
  )
};

export default CartItem;
