import React, { PropsWithChildren, ReactElement } from "react"

import classes from './new-product-screen.module.css';
import NewProductForm from "../../components/new-product-form/new-product-form";
import { Card } from "@mui/material";

const NewProductScreen: React.FunctionComponent<PropsWithChildren> = (): ReactElement => {
  return (
    <>
      <section className={classes['new-product-screen__container']} aria-label="new product screen">
        <h1 className={classes.title}>Add New Product</h1>
        <div className={classes['form-card-wrapper']}>
          <Card className={classes['form-card']}>
            <NewProductForm />
          </Card>
        </div>

      </section>
    </>
  )
};

export default NewProductScreen;
