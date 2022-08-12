import { useEffect, useState } from 'react'
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.scss'
import products from "../../utils/product.mock"
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ secciones }) => {

    const { category } = useParams()
    const [listProducts, setlistProducts] = useState([])
    const filterByCategory = products.filter((producto) => producto.category === category)

    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (category) {
                resolve(filterByCategory)

            }
            else {
                resolve(products)
            }
        }, 2000);

    })

    useEffect(() => {

        getItem
            .then((data) => {
                console.log("Productos: ")
                console.log(data)


                setlistProducts(data)
            })
            .catch((error) => {
                console.log("la llamada fallo" + error)
            })
            .finally((data) => {

                console.log("finally")

            })



    }, [category])






    return (
        <>
            <div className='container'>
                <h2 className='secciones'>{secciones}</h2>
                <h3 className='seccionesid hidden'>{category}</h3>
                <ItemList listProducts={listProducts} />


            </div>
        </>

    )
}

export default ItemListContainer