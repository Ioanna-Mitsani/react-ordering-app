import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { useCart } from '../providers/CartProvider';
import { EURO } from '../helpers/currency';
import { useNavigate } from 'react-router-dom';
export default function CartSnackbar() {
  const { cart, cartTotal, cartItems } = useCart();
  const navigate = useNavigate();
  const action = (
    <>
      <Button
        sx={{ color: 'orangered' }}
        size="small"
        onClick={() => navigate('/checkout')}
      >
        CHECKOUT
      </Button>
    </>
  );

  if (cart.length !== 0) {
    const message = `${cartItems} items added to cart for ${EURO(
      cartTotal
    ).format()}`;
    return (
      <div>
        <Snackbar open={true} message={message} action={action} />
      </div>
    );
  } else {
    return null;
  }
}
