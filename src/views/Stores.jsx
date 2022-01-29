import React from 'react';
import StoreList from '../components/StoreList';

import './Stores.scoped.css';
import { useData } from '../hooks/useData';
import { Typography } from '@mui/material';
import Filters from '../components/Filters';

function Stores() {
  const { data, loading, error } = useData('http://localhost:8000/stores', []);

  if (error) {
    return <Typography variant="h1">Error: {error.message}</Typography>;
  }

  if (loading) {
    return <Typography>Loading...</Typography>;
  } else
    return (
      <>
        <div className="storelist-comp">
          <StoreList stores={data} />
        </div>
      </>
    );
}

export default Stores;
