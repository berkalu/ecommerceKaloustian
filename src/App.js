import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemContenedor from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    
    <div className="container">
        <NavBar />
      <section className='mainProductos'>
        <ItemContenedor section="PRODUCTOS"/>
      </section>
    </div>
  );
}

export default App;
