import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.scss';

import Navbar from './Components/Navbar/Navbar';
import Footer from "./Components/Footer/Footer";
import Home from './Pages/SeccionHome'
import Products from './Components/Products/Products';
import CartView from "./Components/CartView/CartView";
import ItemDetailContainer from "./Components/ItemDetails/ItemDetailContainer";


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/divisas" element={<Products />} />
          <Route path="/cuentas" element={<Products />} />
          <Route path="/items" element={<Products />} />
          <Route path="/boosteo" element={<Products />} />
          <Route path="/divisas/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartView />} />
        </Routes>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
