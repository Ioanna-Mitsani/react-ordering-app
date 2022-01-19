import React from 'react';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

import './Layout.css';

function Layout({children}) {
  return (
    <>
    <Header/>
      {children}
    <Footer className="footer"/>
    </>
    );
}

export default Layout;
