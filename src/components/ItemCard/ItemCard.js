import './ItemCard.scss'

const ItemCard = ({title, price, image}) => {

    return(
        <div className="item-card">
            <img src={`/assets/${image}`} alt="Imagen producto" />
            <p>{title}</p>
            <span>USD$ {price}</span>
            <button>COMPRAR</button>
        </div> 
    )
}

export default ItemCard