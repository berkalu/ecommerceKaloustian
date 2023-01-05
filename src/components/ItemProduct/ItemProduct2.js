import './ItemProduct.scss'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { Link } from 'react-router-dom'


const ItemProduct2 = ({ data }) => {

    const { id, title, image, price, antes } = data

    const sixPagos = (price / 6);
    const six6Pagos = sixPagos.toFixed(2);


    return (
        <div className='contenedor2'>
            <Link to={`/productoss/${id}`}>

                <div className="item-product">
                    <img src={`../assets/${image}`} alt="Imagen producto" />
                    <div className="item-product2" >
                        <h5>{title}</h5>
                        <p className='itemIcon'><CreditCardIcon /> 6 Cuotas sin interes de USD$ {six6Pagos}</p>
                        <p className='itemIcon'><DeliveryDiningIcon />Envio gratis a partir de USD$ 1000</p>
                        <div>
                        <h6 className="precio">ANTES: USD$ {antes}</h6>
                        <h6 className="precio2">AHORA: USD$ {price}</h6>
                            <button className="detalle">DETALLE PRODUCTO</button>
                        </div>
                    </div>
                </div>

            </Link>

        </div>
    )
}

export default ItemProduct2