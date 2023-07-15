import React, { PropsWithChildren, ReactElement, useEffect } from "react"
import { Card } from "@mui/material";

import classes from './new-product-screen.module.css';
import NewProductForm from "../../components/new-product-form/new-product-form";
import { ProductItemDto } from "../../interfaces/product-item-dto.interface";
import { useDispatch, useSelector } from "react-redux";
import { newProductActions, selectIsNewProductLoading, selectIsNewProductSuccess } from "../../store/new-product/new-product.slice";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";

const NewProductScreen: React.FunctionComponent<PropsWithChildren> = (): ReactElement => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newProductState = useSelector((state: RootState) => state.newProduct);
  const isAddNewProductLoading = selectIsNewProductLoading(newProductState);
  const isAddNewProductSuccess = selectIsNewProductSuccess(newProductState)

  useEffect(() => {
    if (isAddNewProductSuccess) {
      navigate('/');
    }
    return () => {
      // TODO: this reset implicates it would be cool to make this new product flow with "ComponentStore" if there's such a thing
      dispatch(newProductActions.resetNewProductFlow());
    };
  }, [isAddNewProductSuccess, navigate, dispatch]);

  const submitNewProductHandler = (newProduct: ProductItemDto): void => {
    dispatch(newProductActions.addNewProduct(newProduct));
  };

  return (
    <>
      <section className={classes['new-product-screen__container']} aria-label="new product screen">
        <h1 className={classes.title}>Add New Product</h1>
        <div className={classes['form-card-wrapper']}>
          <Card className={classes['form-card']}>
            <NewProductForm submitNewProduct={submitNewProductHandler} isAddNewProductLoading={isAddNewProductLoading}/>
          </Card>
        </div>

      </section>
    </>
  )
};

export default NewProductScreen;
