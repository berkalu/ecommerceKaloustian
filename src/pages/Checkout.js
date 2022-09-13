import { CartContext } from '../context/CartContext'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './Checkout.scss'
import Modal2 from '../components/Modal/Modal2'
import Form from '../components/Form/Form'

const Checkout = () => {

    const [shModal, setShModal] = useState(false)
    const { cartProducts, removeProductFromCart } = useContext(CartContext)

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
                                    <h2>{product.title}</h2>
                                    <h6 className='counter2'>SELECCIONASTE {product.counter} UNIDAD/ES</h6>
                                    <h6 className="btn2">COSTO POR UNIDAD: <b>USD$ {product.price}</b></h6><br></br>
                                    <h6 className='subtotal2'>TOTAL: USD$ {subtotal}</h6>
                                    <div className='buttons-checkout'>
                                        <button className="comprar1" onClick={() => removeProductFromCart(product.id)}>ELIMINAR</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    })}
                </div>
                <div className='checkout'>
                    <p className='total2'>TOTAL A PAGAR: <b>USD$ {total}</b></p>
                    <button className="comprar2" onClick={() => setShModal(true) }> IR A PAGAR</button>
                    <Link to={`/productos/`}>
                        <button className="comprar3" >AGREGAR PRODUCTO</button>
                    </Link>
                    <img className='pagos2' src={`../assets/tarjetas.png`} alt="Imagen tarjetas" />
                </div>
                {shModal && 
                <Modal2 title="DATOS DE CONTACTO" close={() => setShModal()}> 
                    <Form/>
                </Modal2>
                }
            </section>





        </>
    )
}



export default Checkout