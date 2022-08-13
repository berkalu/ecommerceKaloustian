import { createContext, useState } from "react";

export const CartContext = createContext()


const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])

    const addProductToCart = (product) => {
        const productIndex = cartProducts.findIndex(
            (productInCart) => productInCart.id === product.id,
        );
        if (productIndex === -1) {
            setCartProducts([...cartProducts, product]);
        } else {
            const cartCopy = [...cartProducts];
            cartCopy[productIndex].counter =
            cartCopy[productIndex].counter + product.counter;
            setCartProducts(cartCopy);
        }
};

    const removeProductFromCart = (id) => {
        const newCart = cartProducts.filter((product) => product.id !== id);
    setCartProducts(newCart);
        
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