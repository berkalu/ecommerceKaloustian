import { useEffect, useState } from 'react'
import '../ItemListContainer/ItemListContainer.scss'
import products from "../../utils/product.mock"
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"
import Modal from '../Modal/Modal'

const ItemDetailContainer = () => {

    const { id } = useParams()
    const [productData, setProductData] = useState([])
    const [showModal, setShowModal] = useState(false)
    
    

    useEffect(() => {
        const foundProduct = products.find((element) => element.id.toString() === id);
        if (foundProduct) {
            setProductData(foundProduct);
        }
    }, [id]);

    

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