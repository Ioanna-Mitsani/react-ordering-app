import { useState, useEffect } from "react";

import React from "react";
import StoreCard from "./StoreCard";

import "./StoreList.scoped.css";
function StoreList() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/stores")
      .then((response) => response.json())
      .then((data) => setStores(data));
  }, []);

  return stores.map((store) => (
    <li className="storelist" key={store.id}>
      <StoreCard store={store} />
    </li>
  ));
}

export default StoreList;
