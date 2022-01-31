import React from 'react';
import { useCart } from '../providers/CartProvider';
import { Button, Paper, Typography, Box, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './Cart.scoped.css';
import { EURO } from '../helpers/currency';

function Cart() {
  const { cart, addToCart, removeFromCart, clearCart, cartTotal } = useCart();

  return (
    <div className="store">
      <Typography variant="h6">My cart</Typography>
      <Paper elevation={1} className="paper-categories">
        <ul className="category-list">
          {cart.map((item) => (
            <li
              key={item.product.product_id}
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Box component="div">
                <Typography>
                  {item.product.title.toLowerCase().charAt(0).toUpperCase() +
                    item.product.title.slice(1)}
                </Typography>
                <Typography variant="caption">
                  {item.product.desc.toLowerCase().charAt(0).toUpperCase() +
                    item.product.desc.slice(1)}
                </Typography>
              </Box>
              <Box
                component="div"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.5em',
                }}
              >
                <Typography sx={{ mr: '3em' }}>
                  {EURO(item.product.price).format()}
                </Typography>
                <IconButton
                  autoFocus
                  onClick={() => {
                    removeFromCart(item.product, 1);
                  }}
                >
                  <RemoveIcon />
                </IconButton>
                <Typography variant="body1">{item.quantity}</Typography>
                <IconButton
                  autoFocus
                  onClick={() => {
                    addToCart(item.product, 1);
                  }}
                >
                  <AddIcon />
                </IconButton>
              </Box>
            </li>
          ))}
        </ul>
        <Box
          component="div"
          sx={{ display: 'flex', justifyContent: 'flex-end', padding: '1em' }}
        >
          <Typography variant="h6">
            Total: {EURO(cartTotal).format()}
          </Typography>
        </Box>
      </Paper>
      <Button
        variant="outlined"
        sx={{
          color: 'orangered',
          borderColor: 'orangered',
          hover: {
            color: 'orangered',
            borderColor: 'orangered',
            backgroundColor: 'white',
          },
        }}
        onClick={() => clearCart()}
      >
        CLEAR CART
      </Button>
    </div>
  );
}

export default Cart;
