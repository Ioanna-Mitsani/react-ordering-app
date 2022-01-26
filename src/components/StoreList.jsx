import React from "react";
import StoreCard from "./StoreCard";

import { useData } from "../hooks/useData";

import "./StoreList.scoped.css";
function StoreList() {
  const stores = useData("http://localhost:8000/stores", []);

  console.log(stores);
  return stores.map((store) => (
    <ul className="storelist">
      <li className="storecard" key={store.id}>
        <StoreCard store={store} />
      </li>
    </ul>
  ));
}

export default StoreList;
