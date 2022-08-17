import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Checkout.scss'

const Checkout = () => {


    const { cartProducts, removeProductToCart } = useContext(CartContext)

    let total = 0
    let subtotal = 0

    return (
        <>



            <section className='container-checkout'>
                <h1 className="title-checkout">MIS PRODUCTOS</h1>
                <div>
                    {cartProducts.map((product) => {
                        {
                            subtotal = product.price * product.counter;
                            total = subtotal + total
                        }
                        return <>
                            <div className="item-product-checkout">
                                <img src={`../assets/${product.image}`} alt="Imagen producto" />
                                <div className="item-product-checkout2" >
                                    <h1>{product.title}</h1>
                                    <p className='description2'>{product.description}</p>
                                    <h3 className='counter2'>SELECCIONASTE {product.counter} UNIDAD/ES</h3>
                                    <span className="btn2 btn btn-primary">COSTO POR UNIDAD: <b>USD$ {product.price}</b></span><br></br>
                                    <h3 className='subtotal2'>TOTAL: USD$ {subtotal}</h3>
                                    <div className='buttons-checkout'>
                                        <button className="comprar1" onClick={() => removeProductToCart(product.id)}>ELIMINAR</button>
                                        <Link to={`/productos/${product.id}`}>
                                        <button className="comprar2" >AGREGAR OTRO PRODUCTO</button>
                                        </Link>
                                    </div>

                                </div>

                            </div>

                        </>
                    })}
                </div>
                <div className='checkout'>
                    <p className='total2'>TOTAL A PAGAR: <b>USD$ {total}</b></p>
                    <button className="comprar2"> IR A PAGAR</button>
                    <img className='pagos2' src={`../assets/tarjetas.png`} alt="Imagen tarjetas" />
                </div>
            </section>





        </>
    )
}



export default Checkout