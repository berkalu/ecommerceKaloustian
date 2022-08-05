import '../ItemDetail/ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'


const ItemDetail = ({ data }) => {

    const {title, description, image, image2,image3, image4, category, price, stock } = data

    const sixPagos = (price / 12);
    const six6Pagos = sixPagos.toFixed(2);

    const onSubmitDetalle = () => {
        console.log("Tocaste Boton   detalle producto")
    }

    const onSubmitComprar = () => {
        console.log("Tocaste COMPRAR")
    }

    return (
        <div className="item-product-detail">
            <div className='img-small'>
                <img className='img2' src={`../assets/${image2}`} alt="Imagen producto" />
                <img className='img2' src={`../assets/${image3}`} alt="Imagen producto" />
                <img className='img2' src={`../assets/${image4}`} alt="Imagen producto" />
            </div>
            <div className="img-big">
                <img className='img1' src={`../assets/${image}`} alt="Imagen producto" />
            </div>
            <div className="buttons">
                    <span className="categoria2">{category}</span>
                    <h1>{title}</h1>
                    <p className='description2' >{description}</p>
                    <span className="precio2">$ {price}</span>
                    <p className='pago' >Pagalo en 6 cuotas de USD$ {six6Pagos}</p>
                    <ItemCount stock={stock} initial={1} />
                    <p className='stock2'>stock disponible: {stock}</p>
                    <Link to={`/carrito`}> 
                        <button className="comprar2" onClick={onSubmitComprar}>Realizar Compra</button> 
                    </Link>     
            </div>
        </div>


    )
}

export default ItemDetail

