import ItemCard from "../ItemCard/ItemCard"
import './ItemListContainer.scss'

const ItemListContainer = ({section}) => {

    return(
        <div className='list-productos'>
            <div className="title-productos">{section}</div>
            <ItemCard title="Notebook Acer Predator" price={3400} image={'../assets/acer.jpg'}/>
            <ItemCard title="Notebook MacBook Air" price={3500} image={'../assets/apple.jpg'}/>
            <ItemCard title="Tablet Advance" price={900} image={'../assets/advance.jpg'}/>
            <ItemCard title="Notebook HP" price={2000} image={'../assets/hp1.jpg'}/>
            <ItemCard title="Notebook Huawei" price={1500} image={'../assets/huawei.jpg'}/>
            <ItemCard title="Notebook Lenovo" price={2200} image={'../assets/lenovo.jpg'}/>
            <ItemCard title="Notebook LG" price={1500} image={'../assets/lg.jpg'}/>
            <ItemCard title="Notebook Samsung" price={2900} image={'../assets/samsung.jpg'}/>
            <ItemCard title="Notebook Dell" price={3200} image={'../assets/dell.jpg'}/>
        </div>
    )
}

export default ItemListContainer