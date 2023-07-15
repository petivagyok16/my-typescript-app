import React, { PropsWithChildren, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, InputAdornment } from '@mui/material';

import classes from './new-product-form.module.css';

interface NewProductValues {
  readonly title: string;
  readonly description: string;
  readonly price: number;
}

const NewProductForm: React.FunctionComponent<PropsWithChildren> = (): ReactElement => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<NewProductValues>();

  const onSubmit = (data: NewProductValues) => {
    console.log(data);
  };

  const validatePrice = (value: number) => {
    if (value < 0) {
      return 'Price must be greater than or equal to zero';
    }
    return true;
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    if (value < 0) {
      setValue('price', 0);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes['form-container']}>
      <TextField
        label="Title"
        {...register('title', { required: true, maxLength: 15 })}
        error={!!errors.title}
        helperText={errors.title ? 'Title is required' : ''}
      />
      <TextField
        label="Description"
        {...register('description', { required: true, maxLength: 40 })}
        error={!!errors.description}
        helperText={errors.description ? 'Description is required' : ''}
      />
      <TextField
        label="Price"
        {...register('price', { required: true, pattern: /^[0-9]+$/, validate: validatePrice })}
        type="number"
        InputProps={{
          endAdornment: <InputAdornment position="end">$</InputAdornment>,
        }}
        error={!!errors.price}
        helperText={errors.price ? 'Price is required and must be a number' : ''}
        onChange={handlePriceChange}
      />
      <Button type="submit" variant="contained" color="primary" className={classes['submit-button']}>Submit</Button>
    </form>
  );
};

export default NewProductForm;