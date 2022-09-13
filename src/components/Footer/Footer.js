import '../Footer/Footer.scss'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import PinDropIcon from '@mui/icons-material/PinDrop';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
        <footer className='pie'>
        <div className="footerContainer">
            <div className="footerLinks">
                <h3>ENLACES</h3>
                <span><Link to="/categorias/Oferta"><p>HOME</p></Link></span>
                <Link to="/productos"><p>PRODUCTOS</p></Link>
                <Link to="/About"><p>NOSOTROS</p></Link>
                <Link to="/Contact"><p>CONTACTANOS</p></Link>
                
            </div>
                
            <div className="footerContact">
                <h3>CONTACTANOS</h3>
                <p><PhoneInTalkIcon/> 351-2337329</p>
                <p><MailOutlineIcon/> info@ecommerce.com</p>
                <p><PinDropIcon/>Beltran y Manuel Cardeñosa 5008, Córdoba.</p>
                <p><QueryBuilderIcon/> Lunes a Domingo 09:00 hs. a 21:00 hs.</p>
            </div>
            <div className="footerSocials">
                <h3>NUESTRAS REDES</h3>
                <InstagramIcon/>
                <FacebookIcon/>
                <YouTubeIcon/>
                
            </div>
        </div>
        <p className="copyright">Copyright © 2022 Ecommerce Diseñado por Bernardo Kaloustian</p>
        </footer>
        </>
    )

}

export default Footer;