import { CartContext } from '../../context/CartContext'
import { useContext, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { collection, addDoc } from 'firebase/firestore'
import db from '../../fireBaseConfig'
import ErrorIcon from '@mui/icons-material/Error';

const Formulario = () => {
	const { cartProducts, clear } = useContext(CartContext)
    const [orderNumber, setOrderNumber] = useState(null);
	const [success, setSuccess] = useState(false)
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

    const pushOrder = async (newOrder) => {
        const collectionOrder = collection(db, 'ordenes')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setOrderNumber(orderDoc.id)
        console.log('ORDEN GENERADA', orderDoc)
    }

	return (
		<>
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
			</>  :
		<>
			<Formik
				initialValues={{
					name: '',
                    surname: '',
                    phone: '',
                    email:'',
                    location:'',
                    city: '',
                    direction: '',  
				}}
				validate={(valores) => {
					let errores = {};

					// Validacion nombre
					if(!valores.name){
						errores.name = 'POR FAVOR INGRESA TU NOMBRE'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)){
						errores.name = 'El nombre solo puede contener letras y espacios'
					}
                    // Validacion apellido
                    if(!valores.surname){
						errores.surname = 'POR FAVOR INGRESA TU APELLIDO'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.surname)){
						errores.surname = 'El apellido solo puede contener letras y espacios'
					}

					// Validacion correo
					if(!valores.email){
						errores.email = 'POR FAVOR INGRESA TU EMAIL'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
						errores.email = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
					}

                    if(!valores.location){
						errores.location = 'POR FAVOR INGRESA TU PROVINCIA'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.location)){
						errores.location = 'El nombre solo puede contener letras y espacios'
					}

                    if(!valores.city){
						errores.city = 'POR FAVOR INGRESA TU CIUDAD'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.city)){
						errores.city = 'El nombre solo puede contener letras y espacios'
					}

                    if(!valores.direction){
						errores.direction = 'POR FAVOR INGRESA TU DIRECCION DE ENTREGA'
					} else if(!/^[a-zA-ZÀ-ÿ\s0-9-]{1,40}$/.test(valores.direction)){
						errores.direction = 'La direccion  solo puede contener letras, numeros, espacio y guiones'
					}

					return errores;
				}}
				onSubmit={(valores, {resetForm}) => {
					resetForm();
					setSuccess(true);
        			pushOrder({...order, buyer: valores});
        			clear();
				}}
			>
				{( {errors} ) => (
					<Form className="form-container">
						<div className='form-labels'>
							<label htmlFor="name">Nombre</label>
							<Field
								type="text" 
								id="name" 
								name="name" 
								placeholder="Ingresa Tu Nombre"
							/>
							<ErrorMessage name="name" component={() => (<div className="error"><ErrorIcon/>{errors.name}</div>)}/>
						</div>
                        <div className='form-labels'>
							<label htmlFor="surname">Apellido</label>
							<Field
								type="text" 
								id="surname" 
								name="surname" 
								placeholder="Ingresa Tu Apellido"
							/>
							<ErrorMessage name="surname" component={() => (<div className="error"><ErrorIcon/>{errors.surname}</div>)}/>
						</div>

                        <div className='form-labels'>
							<label htmlFor="phone">Telefono</label>
							<Field
								type="number" 
								id="phone" 
								name="phone" 
								placeholder="Ingresa tu telefono"
							/>
						</div>

						<div className='form-labels'>
							<label htmlFor="email">Correo</label>
							<Field
								type="text" 
								id="email" 
								name="email" 
								placeholder="correo@correo.com"
							/>
							<ErrorMessage name="email" component={() => (<div className="error"><ErrorIcon/>{errors.email}</div>)}/>
						</div>

                        <div className='form-labels'>
							<label htmlFor="location">Provincia</label>
							<Field
								type="text" 
								id="location" 
								name="location" 
								placeholder="Ingresa Tu Provincia"
							/>
							<ErrorMessage name="location" component={() => (<div className="error"><ErrorIcon/>{errors.location}</div>)}/>
						</div>

                        <div className='form-labels'>
							<label htmlFor="city">Ciudad</label>
							<Field
								type="text" 
								id="city" 
								name="city" 
								placeholder="Ingresa Tu Ciudad"
							/>
							<ErrorMessage name="city" component={() => (<div className="error"><ErrorIcon/>{errors.city}</div>)}/>
						</div>

                        <div className='form-labels'>
							<label htmlFor="direction">Direccion</label>
							<Field
								type="text" 
								id="direction" 
								name="direction" 
								placeholder="Ingresa tu direccion" 
							/>
							<ErrorMessage name="direction" component={() => (<div className="error"><ErrorIcon/>{errors.direction}</div>)}/>
						</div>
						<button className='btnsubmit' type="submit">Enviar</button>
					</Form>
				)}
			</Formik>
		</>
}</>);
}
export default Formulario;