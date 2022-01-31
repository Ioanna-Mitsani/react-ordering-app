import React from 'react';
import { Chip } from '@mui/material';
import { useStores } from '../providers/StoresProvider';

function Filters() {
  const { stores, filterStores, filteredStores } = useStores();

  return (
    <div>
      {stores.map((store) =>
        store.categories.map((category) => (
          <Chip
            label={category}
            onClick={() => {
              stores.filter((store) =>
                store.categories.find((category) => category === 'coffee')
              );
            }}
          />
        ))
      )}
    </div>
  );
}

export default Filters;
