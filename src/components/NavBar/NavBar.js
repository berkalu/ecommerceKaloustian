import './NavBar.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
            <ShoppingCartIcon />
            </div>
        </div>
    )


}

export default NavBar;