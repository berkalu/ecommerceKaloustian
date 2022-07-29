import {useEffect, useState} from 'react'
import './ItemListContainer.scss'
import products from '../utils/products.mock'
import ItemList from '../ItemList/ItemList'



    const ItemListContainer = ({section}) => {

        const [listProducts, setListProducts] = useState([])

        const getProducts = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(products)         
                }, 2000);
        
        })
    
    
        // se trae los productos , solo en el montaje nomas.
            useEffect (() => {
                getProducts
                .then ((res) => {
                    setListProducts(res)
                })
                .catch((error)=>{
                    console.log("la llamada fallo")
                })
                .finally (()=>{
        
                })
            
            }, [])

    
    
        return(
            <>

            <div className='list-productos'>
                <h2 className="title-productos">{section}</h2>
                <ItemList dataProducts={listProducts}/>
            </div>

        
            </>
        )
    
        
    }



export default ItemListContainer

// return(
//     <div className='list-productos'>
//         <h2 className="title-productos">{section}</h2>
//     </div>
// )