import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../NavBar/NavBar2.scss'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'

function CollapsibleExample() {
  return (
    <div className='navbar-primary2'>
    <Navbar className='navBar' collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand><Link to="/"> <img src="/assets/logo.png" alt="logo" /></Link> <div className='cart'>
            <CartWidget />
    </div></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/"><li><button>HOME</button></li></Link></Nav.Link>
            <NavDropdown title="PRODUCTOS" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/productos"><button>TODOS</button></Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/categorias/Notebook" className="subitem"><li><button className='button2'>Notebooks</button></li></Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/categorias/Placa" className="subitems"><li><button className='button2'>Placas</button></li></Link>
            </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/categorias2/Ofertas" className="subitems"><li><button className='button2'>Ofertas</button></li></Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link><Link to="/About"><li><button>NOSOTROS</button></li></Link></Nav.Link>
            <Nav.Link><Link to="/Contact"><li><button>CONTACTANOS</button></li></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );

//   <div className='navbar-primary'>
//                     <Link to="/"> <img src="/assets/logo.png" alt="logo" /></Link>
//                     <ul>
//                         <Link to="/"><li><button>Home</button></li></Link>
//                         <li><Link to="/productos"><button>Productos</button></Link>
//                             <div className='submenu'>
//                             <ul>
//                             <Link to="/categorias/Notebook" className="subitem"><li><button className='button2'>Notebooks</button></li></Link>
//                             <Link to="/categorias/Placa" className="subitems"><li><button className='button2'>Placas</button></li></Link>
//                             <Link to="/categorias2/Ofertas" className="subitems"><li><button className='button2'>Ofertas</button></li></Link>
//                             </ul>
//                             </div>
//                         </li>
//                         <Link to="/About"><li><button>Nosotros</button></li></Link>
//                         <Link to="/Contact"><li><button>Contactanos</button></li></Link>
//                     </ul>
//                     <div className='cart'>
//                         <CartWidget />
//                     </div>
//             </div>

}

export default CollapsibleExample;
