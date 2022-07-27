import ItemCard from "../ItemCard/ItemCard"
import './ItemListContainer.scss'

const ItemListContainer = ({section}) => {


        const product1 = {
            title:"Notebook Acer Predator", 
            price:3400, 
            image:'../assets/acer.jpg',
            stock: 6
        }
    
        const product2 = {
            title:"Notebook MacBook Air", 
            price:3500, 
            image:'../assets/apple.jpg',
            stock: 10
        }
        
        const product3 = {
            title:"Tablet Advance", 
            price:900, 
            image:'../assets/advance.jpg',
            stock: 10
        }

        const product4 = {
            title:"Notebook HP", 
            price:2000, 
            image:'../assets/hp1.jpg',
            stock: 10
        }

        const product5 = {
            title:"Notebook Huawei", 
            price:1500, 
            image:'../assets/huawei.jpg',
            stock: 10
        }

        const product6 = {
            title:"Notebook Lenovo", 
            price:2200, 
            image:'../assets/lenovo.jpg',
            stock: 10
        }

        const product7 = {
            title:"Notebook LG", 
            price:1500, 
            image:'../assets/lg.jpg',
            stock: 10
        }

        const product8 = {
            title:"Notebook Samsung",
            price:2900, 
            image:'../assets/samsung.jpg',
            stock: 10
        }

        const product9 = {
            title:"Notebook Dell", 
            price:3200, 
            image:'../assets/dell.jpg',
            stock: 10
        }
    
        return(
            <div className='list-productos'>
                <h2 className="title-productos">{section}</h2>
                <ItemCard data={product1}/>
                <ItemCard data={product2}/>
                <ItemCard data={product3}/>
                <ItemCard data={product4}/>
                <ItemCard data={product5}/>
                <ItemCard data={product6}/>
                <ItemCard data={product7}/>
                <ItemCard data={product8}/>
                <ItemCard data={product9}/>
            </div>
        )
    }



export default ItemListContainer