import React from 'react';
import { createContext, useContext, useState } from 'react';

const StoresContext = createContext();
const useStores = () => useContext(StoresContext);

function StoresProvider({ children }) {
  const [stores, setStores] = useState([]);
  const [filteredStores, setFilteredStores] = useState([]);

  const updateStores = (newStores) => {
    setStores(newStores);
  };

  const filterStores = (category) => {
    const filtered = stores.filter((store) =>
      store.categories.find((storeCategory) => storeCategory === category)
    );
    setFilteredStores(filtered);
  };

  const value = {
    stores,
    updateStores,
    filteredStores,
    filterStores,
  };

  return (
    <StoresContext.Provider value={value}>{children}</StoresContext.Provider>
  );
}

export default StoresProvider;

export { useStores };
