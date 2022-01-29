import { Route, Routes } from 'react-router-dom';
import Header from './components/shared/Header';

import Home from './views/Home';
import Stores from './views/Stores';
import Store from './views/Store';
import Cart from './views/Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/store/:id" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
