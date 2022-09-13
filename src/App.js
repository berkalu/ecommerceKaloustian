import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemListContainer2 from './components/ItemListContainer/ItemListContainer2';
import './App.scss'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Detail from './pages/Detail';
import Detail2 from './pages/Detail2';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import CartProvider from './context/CartContext'

function App() {
  return (
    <CartProvider >
    <BrowserRouter>
      <div className="containerPrin">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/productos/" element={<Products />} />
          <Route path="/productos/:id" element={<Detail />} />
          <Route path="/productoss/:id" element={<Detail2 />} />
          <Route path="/categorias/:category" element={<ItemListContainer />} />
          <Route path="/categorias2/:category" element={<ItemListContainer2 />} />
          <Route path="/cart" element={<Checkout />} />
          <Route path="*" element={<h1>ERROR 404 - PAGINA NO ENCONTRADA</h1>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
