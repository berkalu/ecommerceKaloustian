import './App.scss';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    
    <div className="container">
        <NavBar />
      <section className='mainProductos'>
        {/* <ItemListContainer section="PRODUCTOS"/> */}
        <ItemDetailContainer id={3} section="DETALLES"/>
      </section>
    </div>
  );
}

export default App;
