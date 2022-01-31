import { Route, Routes } from 'react-router-dom';
import Header from './components/shared/Header';

import Home from './views/Home';
import Stores from './views/Stores';
import Store from './views/Store';
import Cart from './views/Cart';
import Page404 from './views/Page404';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/:id" element={<Store />} />
        <Route path="/checkout" element={<Cart />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
