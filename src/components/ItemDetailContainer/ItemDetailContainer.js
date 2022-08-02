import {useEffect, useState} from 'react'
import products from "../utils/products2.mock"
import ItemDetail from '../ItemDetail/ItemDetail' 



const ItemDetailContainer = ({section}) => {

    const [listProducts, setlistProducts] = useState([])

    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)         
        }, 2000);
    
    })
    
    
    useEffect(()=>{
    
        getItem
        .then ((data) => {
            console.log("Productos: ")
            console.log(data)
            setlistProducts(data)
        })
        .catch((error)=>{
            console.log("la llamada fallo" + error)
        })
        .finally ((data)=>{
    
            console.log("finally")
        })
    
    },[])

    return(
        <>
        <div className='list-productos'>
        <h2 className="title-productos">{section}</h2>

        {listProducts.map((product)=> {
        return <ItemDetail key={product.id} detailProducto={product}/>  
        
        
        })}   


        </div>
    
        </>
    )
    }


export default ItemDetailContainer