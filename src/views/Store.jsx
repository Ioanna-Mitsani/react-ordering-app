import { useData } from '../hooks/useData';
import _ from 'lodash';
import React from 'react';
import Product from '../components/Product';
import { Typography, Paper } from '@mui/material';
import StoreInfo from '../components/StoreInfo';
import './Store.scoped.css';
import ProductModal from '../components/ProductModal';
import { useCart } from '../providers/CartProvider';
import CartSnackbar from '../components/CartSnackbar';
import { useParams } from 'react-router-dom';
function Store() {
  const { id } = useParams();
  const { data, loading, error } = useData(
    `http://localhost:8000/stores/${id}/products`,
    []
  );

  const products = { ...data };
  const groupedProducts = _.groupBy(products, 'category');

  const categories = Object.keys(groupedProducts);

  if (error) {
    return <Typography variant="h6">Error: {error.message}</Typography>;
  }
  if (loading) {
    return <Typography>Loading...</Typography>;
  } else {
    return (
      <div className="store">
        <StoreInfo id={id} />
        <Paper elevation={1} className="paper-categories">
          <ul className="category-list">
            {categories.map((category) => (
              <li key={category}>
                {category.toLowerCase().charAt(0).toUpperCase() +
                  category.slice(1)}
                <ul className="product-list">
                  {groupedProducts[category].map((product) => (
                    <li
                      key={product.product_id}
                      onClick={() => <ProductModal />}
                    >
                      <Product product={product} />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Paper>
        <CartSnackbar className="cart-snackbar" />
      </div>
    );
  }
}
export default Store;
