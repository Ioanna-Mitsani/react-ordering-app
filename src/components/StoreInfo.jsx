import { Typography } from "@mui/material";
import React from "react";
import { useData } from "../hooks/useData";

function StoreInfo() {
  const id = localStorage.getItem("store_id");
  const { data, loading, error } = useData(
    `http://localhost:8000/stores/${id}`,
    {}
  );

  if (error) {
    return <Typography variant="h6">Error: {error.message}</Typography>;
  }
  if (loading) {
    return <Typography>Loading...</Typography>;
  } else
    return (
      <>
        <Typography variant="subtitle1">
          {data.categories.join(" - ")}
        </Typography>
        <Typography variant="h3">{data.title}</Typography>
        <Typography variant="body1">{data.desc}</Typography>
        <Typography variant="body2">
          {data.min_order_price}€ - {data.delivery_time}' - {data.rating} (
          {data.review_no})
        </Typography>
      </>
    );
}

export default StoreInfo;
