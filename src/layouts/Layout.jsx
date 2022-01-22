import React from "react";
import StoreCard from "../components/StoreCard";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import Home from "../views/Home";
import StoreList from "../components/StoreList";

import "./Layout.css";

function Layout() {
  return (
    <>
      <Header />
      <main className="main">
        <StoreList />
      </main>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default Layout;
