import ItemCount from '../ItemCount/ItemCount'
import './ItemCard.scss'

const ItemCard = ({data}) => {
    const {title, image, price, stock} = data
    return(
        <div className="item-card">
            <img src={`/assets/${image}`} alt="Imagen producto" />
            <p>{title}</p>
            <span>USD$ {price}</span>
            <div className='stock'>STOCK: {stock}</div>
            <ItemCount stock={stock} initial={1} />
            <button className='comprar'>COMPRAR</button>
        </div> 
    )
}

export default ItemCard