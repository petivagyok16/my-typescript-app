import React, { PropsWithChildren, ReactElement } from "react"

import { ProductItem as Product } from "../../interfaces/product-item.interface";
import Card from "../../ui-components/card/card";
import classes from './product-item.module.css';
import { formatPrice } from "../../utils/format-price.util";

interface ProductItemProps extends PropsWithChildren {
  readonly product: Product;
  readonly addToCart: (product: Product) => void;
}

const ProductItem: React.FunctionComponent<ProductItemProps> = (props): ReactElement => {
  const formattedPrice = formatPrice(props.product.price);

  const onAddToCartHandler = (): void => {
    props.addToCart(props.product);
  }

  return (
    <>
      <li>
        <Card>
          <div className={classes['product-body-wrapper']}>
            <p>{ props.product.title }</p>
            <p>{ props.product.description }</p>
            <p>Price: { formattedPrice }</p>
            <button onClick={onAddToCartHandler}>Add to cart</button>
          </div>
        </Card>
      </li>
    </>
  )
};

export default ProductItem;
