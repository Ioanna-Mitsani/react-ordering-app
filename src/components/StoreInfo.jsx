import { Typography } from "@mui/material";
import React from "react";
import { useData } from "../hooks/useData";
import { EURO } from "../helpers/currency";
import format from "currency.js";

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
        <Typography variant="caption">{data.categories.join(" - ")}</Typography>
        <Typography variant="h4">{data.title}</Typography>
        <Typography variant="body1">{data.desc}</Typography>
        <Typography variant="body2">
          {EURO(data.min_order_price).format()} - {data.delivery_time}' -{" "}
          {data.rating} ({data.review_no})
        </Typography>
      </>
    );
}

export default StoreInfo;
