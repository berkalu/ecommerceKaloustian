import { createContext, useState } from "react";

const CartContext = createContext()


const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])

    const addProductToCart = (product, cant) => {
    if(cartProducts.some(is => is.id == product.id)){

        let finded = cartProducts.findIndex(is => is.id == product.id)
        let itemFinded = cartProducts[finded]
        itemFinded.cant =    itemFinded.cant + cant

        const actCarrito = [...cartProducts]
        actCarrito.splice(finded,1,itemFinded)

        setCartProducts([...actCarrito])
        
    
    } else {

        let itemFinal = {...product,cant}
        setCartProducts([...cartProducts, itemFinal ]);
    }
}

    const removeProductFromCart = (id) => {
        const actCarrito = [...cartProducts];
        let index = actCarrito.findIndex(first => first.id === id);
        
        actCarrito.splice( index, 1 );

        setCartProducts([...actCarrito]);
        
    }

    const clear = () => {
        setCartProducts([])
    }

    console.log("cartProducts: ", cartProducts)
    const data = {
        cartProducts,
        setCartProducts,
        addProductToCart,
        clear,
        removeProductFromCart
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

export { CartContext }