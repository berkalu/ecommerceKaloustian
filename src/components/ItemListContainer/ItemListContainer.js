import { useEffect, useState } from 'react'
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.scss'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import db from '../../fireBaseConfig'

const ItemListContainer = ({ secciones }) => {

    const { category } = useParams()
    const [listProducts, setlistProducts] = useState([])

    useEffect(() => {

        const qCollection = collection(db,"products") 
       
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
            <div className='container1'>
                <h3 className='seccionesid hidden'>{category}</h3>
                {
                listProducts.length ?

                <ItemList listProducts={listProducts} />
                :
                <p>CARGANDO PRODUCTOS...</p>
                }

            </div>
        </>

    )
}

export default ItemListContainer