import { useData } from "../hooks/useData";
import _ from "lodash";
import React from "react";
import Product from "./Product";
import { Typography } from "@mui/material";

function TestProducts() {
  const id = localStorage.getItem("store_id");
  const { data, loading, error } = useData(
    `http://localhost:8000/stores/${id}/products`,
    []
  );

  const products = { ...data };
  const groupedProducts = _.groupBy(products, "category");

  const categories = Object.keys(groupedProducts);

  if (loading) {
    return <Typography>Loading...</Typography>;
  } else
    return (
      <>
        <h1>products</h1>
        <ul>
          {categories.map((category) => (
            <li key={category}>
              {category}
              <ul>
                {groupedProducts[category].map((product) => (
                  <li key={product.product_id}>
                    <Product product={product} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </>
    );
}

export default TestProducts;
