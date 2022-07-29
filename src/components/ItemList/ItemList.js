import ItemCard from "../ItemCard/ItemCard"


const ItemList = ({dataProducts}) => {
return (
<>
{dataProducts.map((product)=> {
return <ItemCard key={product.id}  data={product}/>
})}       


</>
)
}

export default ItemList