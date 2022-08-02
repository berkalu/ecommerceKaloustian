import '../ItemDetail/ItemDetail.scss' 
import ItemCount from '../ItemCount/ItemCount' 

const ItemDetail =   ( {detailProducto} ) => {

    const {title,image,image2,image3,image4,price,stock, description}=detailProducto


return (

    <div className="item-card2">
      <div className='img-small'>
      <img className='img2' src={`/assets/${image2}`} alt="Imagen producto" />
      <img className='img2' src={`/assets/${image3}`} alt="Imagen producto" />
      <img className='img2' src={`/assets/${image4}`} alt="Imagen producto" />
      </div>
      <div className='img-big'>
      <img className='img1' src={`/assets/${image}`} alt="Imagen producto" />
      </div>
      <div className='buttons'>
      <h2>{title}</h2>
      <p>{description}</p>
      <span>USD$ {price}</span>
      <div className='stock2'>STOCK: {stock}</div>
      <ItemCount stock={stock} initial={1} />
      <button className='comprar2'>COMPRAR</button>
      </div>
    </div> 
  
)
}

export default ItemDetail