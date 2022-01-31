import React from 'react';
import StoreList from '../components/StoreList';

import './Stores.scoped.css';
import { useData } from '../hooks/useData';
import { useStores } from '../providers/StoresProvider';

function Stores() {
  const { data, loading, error } = useData('http://localhost:8000/stores', []);

  return (
    <div className="storelist-comp">
      <StoreList stores={data} />
    </div>
  );
}

export default Stores;
