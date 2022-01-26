import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function StoreCard({ store }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea
        onClick={() => localStorage.setItem("store_id", store.id)}
      >
        <CardMedia
          component="img"
          height="140"
          image={store.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {store.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {store.categories.map((category) => category).join(", ")}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {store.min_order_price}€ - {store.delivery_time}' - {store.rating} -
            ({store.review_no})
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
