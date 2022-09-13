import './Form.scss'
import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { collection, addDoc } from 'firebase/firestore'
import db from '../../fireBaseConfig'
import ErrorIcon from '@mui/icons-material/Error';

const Formulario2 = () => {

    const [success, setSuccess] = useState(false)
	const [order, setOrder] = useState({
        buyer: {},
        date: new Date().toLocaleString(),
    })

    const pushOrder = async (newOrder) => {
        const collectionOrder = collection(db, 'contacto')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        console.log('CONTACTO GENERADO', orderDoc)
    }

	return (
		<>
		{success ? <>
			<div className='success2'>  
			<h2>GRACIAS POR DEJARNOS TUS DATOS !!</h2>
			<h4> ESTAREMOS EN CONTACTO CONTIGO LO ANTES POSIBLE</h4>
			<h5>RECIBIRAS EN TU MAIL OFERTAS Y PROMOCIONES !!</h5>
			</div>  
			</>  :
		<>
			<Formik
				initialValues={{
					name: '',
                    surname: '',
                    phone: '',
                    email:'',
                    comment: '',  
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

					return errores;
				}}
				onSubmit={(valores, {resetForm}) => {
					resetForm();
					setSuccess(true);
        			pushOrder({...order, buyer: valores});
				}}
			>
				{( {errors} ) => (
					<Form className="form-container2">
						<div className='form-labels2'>
							<label htmlFor="name">Nombre</label>
							<Field
								type="text" 
								id="name" 
								name="name" 
								placeholder="Ingresa Tu Nombre"
							/>
							<ErrorMessage name="name" component={() => (<div className="error"><ErrorIcon/>{errors.name}</div>)}/>
						</div>
                        <div className='form-labels2'>
							<label htmlFor="surname">Apellido</label>
							<Field
								type="text" 
								id="surname" 
								name="surname" 
								placeholder="Ingresa Tu Apellido"
							/>
							<ErrorMessage name="surname" component={() => (<div className="error"><ErrorIcon/>{errors.surname}</div>)}/>
						</div>

                        <div className='form-labels2'>
							<label htmlFor="phone">Telefono</label>
							<Field
								type="number" 
								id="phone" 
								name="phone" 
								placeholder="Ingresa tu telefono"
							/>
						</div>

						<div className='form-labels2'>
							<label htmlFor="email">Correo</label>
							<Field
								type="text" 
								id="email" 
								name="email" 
								placeholder="correo@correo.com"
							/>
							<ErrorMessage name="email" component={() => (<div className="error"><ErrorIcon/>{errors.email}</div>)}/>
						</div>

                        <div className='form-labels2'>
							<Field name="comment" as="textarea" placeholder="Deja tu consulta" />
						</div>
						<button className='btnsubmit2' type="submit">Enviar</button>
					</Form>
				)}
			</Formik>
		</>
}</>);
}

export default Formulario2;