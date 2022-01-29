import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Typography } from '@mui/material';
import { EURO } from '../helpers/currency';
import { useCart } from '../providers/CartProvider';

export default function ProductModal({
  product,
  open,
  handleClickAdd,
  handleClickSub,
  quantity,
  handleClose,
}) {
  const { addToCart, cart } = useCart();

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {product.title.toLowerCase().charAt(0).toUpperCase() +
            product.title.slice(1)}{' '}
          - {EURO(product.price * quantity).format()}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {product.desc.toLowerCase().charAt(0).toUpperCase() +
              product.desc.slice(1)}
          </DialogContentText>
        </DialogContent>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <DialogActions sx={{ justifyContent: 'flex-start' }}>
            <IconButton autoFocus onClick={handleClickSub}>
              <RemoveIcon />
            </IconButton>
            <Typography>{quantity}</Typography>
            <IconButton onClick={handleClickAdd} autoFocus>
              <AddIcon />
            </IconButton>
          </DialogActions>
          <DialogActions sx={{}}>
            <Button
              sx={{
                color: 'inherit',
                backgroundColor: 'inherit',
                hover: { backgroundColor: 'inherit' },
              }}
              onClick={() => {
                addToCart(product, quantity);
                handleClose();
              }}
              autoFocus
            >
              Add to cart
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
