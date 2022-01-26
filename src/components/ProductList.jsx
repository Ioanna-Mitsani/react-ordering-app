import { Typography } from "@mui/material";
import React from "react";
import { useData } from "../hooks/useData";
import Product from "./Product";

function ProductList() {
  const id = localStorage.getItem("store_id");
  const { data, loading, error } = useData(
    `http://localhost:8000/stores/${id}/products`,
    []
  );

  const products = { ...data };

  if (error) {
    return <Typography variant="h6">Error: {error.message}</Typography>;
  }
  if (loading) {
    return <Typography>Loading...</Typography>;
  } else
    return (
      <ul>
        {products.map((product) => (
          <li key={product.product_id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    );
}

export default ProductList;
