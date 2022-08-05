import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'
import '../NavBar/NavBar.scss'


const NavBar = () => {
      return(

          <div className='navbar-primary'>
              <Link to="/"> <img src="/assets/logo.png" alt="logo" /></Link>
              <ul>
              <Link to="/"><li><button>Home</button></li></Link>
              <div className="dropdown">
                <Link to="/productos"><li><button>Productos</button></li></Link>
                <Link to="/categorias/Notebook" className="subitem"><li><button className='button2'>Notebooks</button></li></Link>
                <Link to="/categorias/Placa" className="subitems"><li><button className='button2'>Placas</button></li></Link>
              </div>
              <Link to="/About"><li><button>Nosotros</button></li></Link>
              <Link to="/Contact"><li><button>Contactanos</button></li></Link>
              </ul>
              <div className='cart'>
              <CartWidget />
              </div>
          </div>
      )
  
  
}



export default NavBar;