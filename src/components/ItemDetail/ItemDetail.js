import '../ItemDetail/ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useState } from 'react';


const ItemDetail = ({ data, setShowModal }) => {
    const [cantidadSelected, setCantidadSelected] = useState(0)
    const {title, description, image, image2,image3, image4, category, price, stock } = data
    const sixPagos = (price / 6);
    const six6Pagos = sixPagos.toFixed(2);

    return (
        <div className="item-product-detail">
            <div className='img-small'>
                <img className='img2' src={`../assets/${image2}`} alt="Imagen producto" onClick={() => setShowModal(true)} />
                <img className='img2' src={`../assets/${image3}`} alt="Imagen producto" onClick={() => setShowModal(true)} />
                <img className='img2' src={`../assets/${image4}`} alt="Imagen producto" onClick={() => setShowModal(true)} />
            </div>
            <div className="img-big">
                <img className='img1' src={`../assets/${image}`} alt="Imagen producto" />
            </div>
            <div className="buttons">
                    <span className="categoria2">{category}</span>
                    <h1>{title}</h1>
                    <p className='description2' >{description}</p>
                    <span className="precio2">USD$ {price}</span>
                    <p className='pago' >6 cuotas sin interes de USD$ {six6Pagos}</p>
                    <p className='stock2'>Stock Disponible: {stock}</p>
                    {console.log("cantidadSelected: ", cantidadSelected)}
                    <ItemCount setCantidadSelected={setCantidadSelected} stock={stock} initial={1} productData={data}/>
                    <button className="comprar2"><Link to="/productos/">SEGUIR COMPRANDO</Link></button>    
            </div>
        </div>


    )
}

export default ItemDetail

