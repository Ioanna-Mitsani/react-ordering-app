import { CardActionArea, Paper, Typography } from '@mui/material';
import { EURO } from '../helpers/currency';
import { useState } from 'react';
import ProductModal from './ProductModal';
import { useProductModal } from '../hooks/useProductModal';

function Product({ product }) {
  const {
    open,
    handleClickOpen,
    handleClose,
    handleClickAdd,
    handleClickSub,
    quantity,
  } = useProductModal();
  return (
    <Paper elevation={0}>
      <CardActionArea onClick={handleClickOpen}>
        <Typography variant="body1">
          {product.title.toLowerCase().charAt(0).toUpperCase() +
            product.title.slice(1)}
        </Typography>
        <Typography variant="caption">
          {product.desc.toLowerCase().charAt(0).toUpperCase() +
            product.desc.slice(1)}
        </Typography>
        <Typography variant="body2">{EURO(product.price).format()}</Typography>
      </CardActionArea>
      <ProductModal
        product={product}
        open={open}
        handleClose={handleClose}
        handleClickAdd={handleClickAdd}
        handleClickOpen={handleClickOpen}
        handleClickSub={handleClickSub}
        quantity={quantity}
      />
    </Paper>
  );
}

export default Product;
