import './ItemProduct.scss'
import { Link } from 'react-router-dom'

const ItemProduct = ({ data }) => {

    const { id, title, image, category, price } = data




    const onSubmitDetalle = () => {
        console.log("Tocaste Boton   detalle producto")
    }



    const onSubmitComprar = () => {
        console.log("Tocaste Boton   Comprar")
    }

    console.log("data:", id)


    const sixPagos = (price / 6);
    const six6Pagos = sixPagos.toFixed(2);


    return (
        <div className='contenedor'>
            {/* <Detail data={productData} /> */}
            <Link to={`/productos/${id}`}>

                <div className="item-product">
                    <img src={`../assets/${image}`} alt="Imagen producto" />
                    <div className="item-product2" >
                        <h4 className="categoria">{category}</h4>
                        <h1>{title}</h1>
                        <span className="precio">USD$ {price}</span>
                        <p className='pago' >pagalo en 6 cuotas de USD$ {six6Pagos}</p>

                        <div>
                            <button className="detalle" onClick={onSubmitDetalle}>DETALLE PRODUCTO</button>
                        </div>
                    </div>
                </div>

            </Link>

        </div>
    )
}

export default ItemProduct




