import React from "react";
import Header from "../components/shared/Header";
import TestProducts from "../components/TestProducts";
import Store from "./Store";
import StoreInfo from "../components/StoreInfo";
import "./reset.css";
import "./Layout.css";

function Layout() {
  return (
    <>
      <Header />
      <main className="main">
        <Store />
      </main>
    </>
  );
}

export default Layout;
