import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.scss'


const  CartWidget = () =>  {
    // TOTAL  tiene que ser un parametro que me lo pase la pagina...
    const total=0;
    return (
        // fragment
        <> 

<div  className="carritoCompra">
<ShoppingCartIcon /> USD${total}</div>

</>
    )
}

export default   CartWidget;