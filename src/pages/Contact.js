import Form2 from '../components/Form/Form2'
import './Contact.scss'

const contact = () => {



      return (
            <>
            <div className='titleForm2'><h1 className="titulo centrado">CONTACTO</h1></div>
            <section className='contact'>
                  <div className='contactInfo'>
                        <h3>ESCRIBINOS !</h3>
                        <p>ESTAMOS SIEMPRE DISPUESTOS A BRINDARTE AYUDA Y DE FORMA PERSONALIZADA, POR ESO ES QUE EN BK TECH TE INVITAMOS A QUE NOS DEJES TUS DATOS Y UN ASESOR SE COMUNICARA CON USTED A LA BREVEDAD PARA QUE PUEDAS REALIZAR UNA COMPRA QUE SE AJUSTE LO MAS CERCANO A TUS NECESIDADES.</p>
                        <p>SOMOS UN EQUIPO QUE ESTARA SIEMPRE PARA BRINDAR LA AYUDA NECESESARIA A NUESTROS CLIENTES.</p>
                        <div className='contactImage'> <img src="/assets/teamwork.jpg" alt="logo" /></div>
                  </div>
                  <div><Form2/></div>
                  
            </section>

            </>

      )


}

export default contact