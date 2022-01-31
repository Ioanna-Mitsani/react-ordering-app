import React from 'react';
import StoreCard from './StoreCard';
import { Chip } from '@mui/material';
import './StoreList.scoped.css';
import { useStores } from '../providers/StoresProvider';

function StoreList({ stores }) {
  /* const filter = stores.filter((store) => {
    return store.categories.find((category) => category === 'coffee');
  });
 */
  return (
    <>
      <div className="filters-comp"></div>
      <div className="storelist-comp">
        {stores.map((store) => (
          <ul className="storelist">
            <li className="storecard" key={store.id}>
              <StoreCard store={store} />
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default StoreList;
