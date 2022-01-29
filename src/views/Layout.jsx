import React from 'react';
import Header from '../components/shared/Header';
import './reset.css';
import './Layout.css';
import Stores from './Stores';
import Store from './Store';
import Cart from './Cart';
function Layout() {
  return (
    <>
      <Header />
      <main className="main">
        <Cart />
      </main>
    </>
  );
}

export default Layout;
