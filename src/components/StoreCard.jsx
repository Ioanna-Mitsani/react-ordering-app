import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { EURO } from '../helpers/currency';
import { useNavigate } from 'react-router-dom';
import image from '../images/sample.jpg';
import StarRateIcon from '@mui/icons-material/StarRate';

export default function StoreCard({ store }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea
        onClick={() => {
          localStorage.setItem('store_id', store.id);
          navigate(`/${store.id}`);
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {store.title}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {store.categories.map((category) => category).join(' - ')}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {EURO(store.min_order_price).format()} - {store.delivery_time}' -{' '}
            <StarRateIcon fontSize="inherit" sx={{ color: 'orange' }} />
            {store.rating} ({store.review_no})
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
