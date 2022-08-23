import { useEffect, useState } from 'react'
import '../ItemListContainer/ItemListContainer.scss'
import products from "../../utils/product.mock"
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"
import Modal from '../Modal/Modal'
import db from '../../fireBaseConfig'
import { doc, getDoc } from "firebase/firestore"
import { async } from '@firebase/util'

const ItemDetailContainer = () => {

    const { id } = useParams()
    const [productData, setProductData] = useState([])
    const [showModal, setShowModal] = useState(false)
    
    

    useEffect(() => {
            getProduct()
            .then((res) => {
                setProductData(res)
            })
    }, [id]);

    const getProduct = async () => {
        const docRef = doc(db, 'products', id)
        const docSnapshot = await getDoc(docRef)
        let product = docSnapshot.data()
        product.id = docSnapshot.id
        return product

    }

    return (

        <div>
            <div className={`container-item-detail ${showModal ? 'overlay-black' : ''}`}></div>
            <ItemDetail data={productData} setShowModal={setShowModal}/>
            {showModal && (
                <Modal title="Imagen Producto" close={setShowModal}>
                    <img src={`/assets/${productData.image}`} />
                    <img src={`/assets/${productData.image2}`} />
                    <img src={`/assets/${productData.image3}`} />
                    <img src={`/assets/${productData.image4}`} />
                </Modal>
            )}


        </div>

    )
}


export default ItemDetailContainer