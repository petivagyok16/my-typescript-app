import React, { PropsWithChildren, ReactElement, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";

import { productsActions, selectIsProductsLoading, selectProducts } from '../../store/products/products.slice';
import { RootState } from '../../store/store';
import classes from './products-screen.module.css';
import ProductItem from "../../components/product-item/product-item";
import { ProductItem as Product } from "../../interfaces/product-item.interface";
import Spinner from "../../ui-components/spinner/spinner";
import { cartActions } from "../../store/cart/cart.slice";

const ProductsScreen: React.FunctionComponent<PropsWithChildren> = (): ReactElement => {
  const dispatch = useDispatch();
  const productsState = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(productsActions.fetchProducts());
    dispatch(cartActions.loadCartItemsFromLocalStorage());
  }, [dispatch]);

  const products = selectProducts(productsState);
  const isProductsLoading = selectIsProductsLoading(productsState);

  const onAddToCartHandler = (product: Product): void => {
    dispatch(cartActions.addItemToCart(product));
  }

  return (
    <>
      <section className={classes['products-screen__container']} aria-label="products screen">
        <h1 className={classes.title}>BUY YOUR FAVORITE PRODUCTS</h1>

        { isProductsLoading && <Spinner /> }

        { !isProductsLoading &&
          <ul className={classes['products-list']}>
            { products.map((product: Product) => {
              return (
                <ProductItem key={product.id} product={product} addToCart={onAddToCartHandler}/>
              )
            })}
          </ul>
        }
      </section>
    </>
  )
};

export default ProductsScreen;
