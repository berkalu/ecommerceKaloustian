import './ItemProduct.scss'
import { Link } from 'react-router-dom'


const ItemProduct = ({ data }) => {

    const { id, title, image, category, price } = data

    const sixPagos = (price / 6);
    const six6Pagos = sixPagos.toFixed(2);
    const stopProp = (e) => {
        console.log("stop")
        e.stopPropagation()
    }

    return (
        <div className='contenedor'>
            <Link to={`/productos/${id}`}>

                <div className="item-product">
                    <img src={`../assets/${image}`} alt="Imagen producto" />
                    <div className="item-product2" >
                        <h4 className="categoria">{category}</h4>
                        <h1>{title}</h1>
                        <span className="precio">USD$ {price}</span>
                        <p className='pago' >pagalo en 6 cuotas de USD$ {six6Pagos}</p>

                        <div>
                            <button onClick={stopProp} className="detalle">DETALLE PRODUCTO</button>
                        </div>
                    </div>
                </div>

            </Link>

        </div>
    )
}

export default ItemProduct




