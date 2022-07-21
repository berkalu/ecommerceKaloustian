import './NavBar.scss'
import CartWidget from './CartWidget'

const NavBar = () => {
    return(
        <div className='navbar-primary'>
            <img src="/assets/logo.png" alt="logo" />
            <ul>
                <li><button>Home</button></li>
                <li><button>Productos</button></li>
                <li><button>Nosotros</button></li>
                <li><button>Contactanos</button></li>
            </ul>
            <div className='cart'>
            <CartWidget />
            </div>
        </div>
    )


}

export default NavBar;