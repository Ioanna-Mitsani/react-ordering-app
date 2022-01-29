import React from 'react';
import StoreCard from './StoreCard';
import { Chip } from '@mui/material';
import './StoreList.scoped.css';

function StoreList({ stores }) {
  const filter = (category) =>
    stores.filter((store) => store.categories.includes(category));

  return (
    <div className="storelist-comp">
      {stores.map((store) => (
        <ul className="storelist">
          <li className="storecard" key={store.id}>
            <StoreCard store={store} />
          </li>
        </ul>
      ))}
    </div>
  );
}

export default StoreList;
