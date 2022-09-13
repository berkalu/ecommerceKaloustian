import { useEffect, useState } from 'react'
import ItemList2 from "../ItemList/ItemList2"
import './ItemListContainer.scss'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import db from '../../fireBaseConfig'

const ItemListContainer2 = ({ secciones2 }) => {

    const { category } = useParams()
    const [listProducts, setlistProducts] = useState([])

    useEffect(() => {

        const qCollection = collection(db,"oferta") 
       
       if (category){
           const qFilter = query(qCollection, where("category" , "==", category))
           getDocs(qFilter)
           .then(res =>setlistProducts (res.docs.map((traer)=>{
                    let product = traer.data()
                    product.id = traer.id
                    return product
                })))
       }else{
       getDocs(qCollection)
       .then(res =>setlistProducts (res.docs.map((traer)=>{
        let product = traer.data()
        product.id = traer.id
        return product
    })))
        
       }
   },[category])


    return (
        <>
            <div className='container2'>
                <div className='secccionesPrin'><h2 className='secciones2'>{secciones2}</h2></div>
                <h3 className='seccionesid hidden2'>{category}</h3>
                {
                listProducts.length ?

                <ItemList2 listProducts={listProducts} />
                :
                <p>CARGANDO PRODUCTOS...</p>
                }

            </div>
        </>

    )
}

export default ItemListContainer2