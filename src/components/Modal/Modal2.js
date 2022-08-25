import '../../pages/Checkout.scss'
import CloseIcon from '@mui/icons-material/Close';

const Modal2 = ({title, close, children}) => {
    return(
        <div className="modal-custom2">
            <CloseIcon onClick={() => close(false)}/>
            <h2>{title}</h2>
            {children}
        </div>
    )
}


export default Modal2