import { CartContext } from '../context/CartContext'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './Checkout.scss'
import Modal2 from '../components/Modal/Modal2'
import db from '../fireBaseConfig'
import { collection, addDoc } from 'firebase/firestore'

const Checkout = () => {

    const [shModal, setShModal] = useState(false)
    const { cartProducts, removeProductFromCart, clear } = useContext(CartContext)
    const [success, setSuccess] = useState(false)
    const [orderNumber, setOrderNumber] = useState(null);

    const getTotalPrice = (array) =>{
        return array.reduce((acum, currentValue)=> acum + (currentValue.price * currentValue.counter) ,0);
    }

    const [order, setOrder] = useState({
        items: cartProducts.map((product) => {
            return {
                id: product.id,
                title: product.title,
                cuantity: product.counter,
                price: product.price,
                totalprice: product.price * product.counter,
            }
        } ),
        buyer: {},
        date: new Date().toLocaleString(),
        total: getTotalPrice(cartProducts)
    })
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        phone: '',
        email:'',
        location:'',
        city: '',
        direction: '',

    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const submitData = (e) => {
        e.preventDefault();
        setSuccess(true);
        pushOrder({...order, buyer: formData});
        clear();
    }

    const pushOrder = async (newOrder) => {
        const collectionOrder = collection(db, 'ordenes')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setOrderNumber(orderDoc.id)
        console.log('ORDEN GENERADA', orderDoc)
    }

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
                        {success ? <>
                        {
                        orderNumber ?
                        <div className='success'>  
                        <h2>SU ORDEN SE GENERO CORRECTAMENTE</h2>
                        <h4> ID DE SU COMPRA: {orderNumber}</h4>
                        <h5>RECIBIRA UN MAIL CON EL DETALLE DE SU COMPRA</h5>
                        </div>
                        :
                        <p>PROCESANDO SU COMPRA...</p>
                        }   
                        </> : <>
                            <form className='form-container' onSubmit={submitData}>
                                <input 
                                    type='text' 
                                    name='name' 
                                    placeholder='Ingresar Nombre'
                                    onChange={handleChange}
                                    value={formData.name}
                                />
                                <input 
                                    type='text' 
                                    name='surname' 
                                    placeholder='Ingresar Apellido'
                                    onChange={handleChange}
                                    value={formData.surname}
                                />
                                <input 
                                    type='number' 
                                    name='phone' 
                                    placeholder=' Ingresar Telefono De Contacto' 
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <input 
                                    type='email' 
                                    name='email' 
                                    placeholder='Ingresar Mail'
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <input 
                                    type='text' 
                                    name='location' 
                                    placeholder='Ingresar Provincia'
                                    value={formData.location}
                                    onChange={handleChange}
                                />
                                <input 
                                    type='text' 
                                    name='city' 
                                    placeholder='Ingresar Localidad'
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                                <input 
                                    type='text' 
                                    name='direction' 
                                    placeholder='Ingresar Su Calle y Numero'
                                    value={formData.direction}
                                    onChange={handleChange}
                                />
                                {(formData.name !== "" && formData.surname !== "" && formData.phone  !== "" && formData.email !== "" && formData.location !== "" && formData.city !== "" && formData.direction !== "") ? 
                                    <button className='btnsubmit' type="submit"> ENVIAR</button> : <></>}                                
                            </form></>}
                </Modal2>
                }
            </section>





        </>
    )
}



export default Checkout