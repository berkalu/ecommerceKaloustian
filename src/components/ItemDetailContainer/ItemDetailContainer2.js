import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"
import Modal from '../Modal/Modal'
import db from '../../fireBaseConfig'
import { doc, getDoc } from "firebase/firestore"
import './ItemDetailContainer.scss'

const ItemDetailContainer = () => {

    const { id } = useParams()
    const [productData, setProductData] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [showModal2, setShowModal2] = useState(false)
    const [showModal3, setShowModal3] = useState(false)
    const [showModal4, setShowModal4] = useState(false)
    

    useEffect(() => {
            getProduct2()
            .then((res) => {
                setProductData(res)
            })
    }, [id]);



    const getProduct2 = async () => {
        const docRef2 = doc(db, 'oferta', id)
        const docSnapshot2 = await getDoc(docRef2)
        let product = docSnapshot2.data()
        product.id = docSnapshot2.id
        return product

    }

    return (

        
        
        <div className='detContainer'>
            
            {
            productData.image ?
            <ItemDetail data={productData} setShowModal={setShowModal} setShowModal2={setShowModal2} setShowModal3={setShowModal3} setShowModal4={setShowModal4}/>
            :
            <div className='cargando'><p>CARGANDO DETALLES...</p></div>
            }
            <div className={`container-item-detail ${showModal} ${showModal2} ${showModal3} ${showModal4}`}></div>
            {showModal && (
                <Modal title="Imagen Producto" close={setShowModal}>
                    <img src={`/assets/${productData.image}`} alt="imgprod"/>
                </Modal>
            )}
            {showModal2 && (
                <Modal title="Imagen Producto" close={setShowModal2}>
                    <img src={`/assets/${productData.image2}`} alt="imgprod2"/>
                </Modal>
            )}
            {showModal3 && (
                <Modal title="Imagen Producto" close={setShowModal3}>
                    <img src={`/assets/${productData.image3}`} alt="imgprod3"/>
                </Modal>
            )}
            {showModal4 && (
                <Modal title="Imagen Producto" close={setShowModal4}>
                    <img src={`/assets/${productData.image4}`} alt="imgprod4"/>
                </Modal>
            )}               
        </div>



    )
}


export default ItemDetailContainer