import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    
    <div className="container">
        <NavBar />
      <section className='mainProductos'>
        <ItemListContainer section="PRODUCTOS"/>
      </section>
    </div>
  );
}

export default App;
