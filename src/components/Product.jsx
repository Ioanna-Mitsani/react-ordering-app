import { Paper, Typography } from "@mui/material";
import React from "react";

function Product({ product }) {
  return (
    <Paper elevation={3}>
      <Typography variant="body1">{product.title}</Typography>
      <Typography variant="caption">{product.desc}</Typography>
      <Typography variant="body2">{product.price}0 €</Typography>
    </Paper>
  );
}

export default Product;
