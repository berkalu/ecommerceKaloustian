import ItemProduct2 from "../ItemProduct/ItemProduct2"


const ItemList2 = ({listProducts}) => {
return (
<>
{listProducts.map((product)=> {
    return <ItemProduct2 key={product.id} data={product}/>
})}       


</>
)
}


export default ItemList2