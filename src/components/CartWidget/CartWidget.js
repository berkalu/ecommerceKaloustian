import {useState , useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'


const CartWidget = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const { cartProducts, clear, removeProductFromCart } = useContext(CartContext)

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        <div className='cart-widget'>
            <ShoppingCartIcon 
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                {cartProducts.map((product) => {
                    return(
                        <div className='item-cart-product' key={product.id}>
                            <img src={`/assets/${product.image}`} alt="" />
                            <div className='cart-product__details'>
                                <p>{product.title}</p>
                            </div>
                            <div className='cart-product__details'>
                                <p>USD$ {product.price}</p>
                            </div>
                            <p className='cart-product__details'>Seleccionaste <b>{product.counter}</b> unidades.</p>
                            <div className='cart-product__details'>
                                <p>TOTAL  USD$ {parseInt(product.price) * parseInt(product.counter)}</p>
                            </div>
                            <div className='cart-product__action'>
                                <DeleteIcon onClick={()=>removeProductFromCart(product.id)} />
                            </div>
                            <button className="comprar2"><Link to="/cart">TERMINAR COMPRA</Link></button> 
                            <button className="comprar2"><Link to="/productos/">SEGUIR COMPRANDO</Link></button> 
                            
                        </div>
                        
                    )
                })}
                <div className='clearbtn'><button className='clear' onClick={() => clear()}>LIMPIAR CARRITO</button></div>
            </Menu>
        </div>
    )
}

export default CartWidget