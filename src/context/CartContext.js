import { createContext, useState } from "react";

export const CartContext = createContext()


const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    const [totalProducts, setTotalProducts] = useState(0)

    const addProductToCart = (product) => {
        const productIndex = cartProducts.findIndex(
            (productInCart) => productInCart.id === product.id,);
        if (productIndex === -1) {
            setCartProducts([...cartProducts, product]);
            setTotalProducts(totalProducts + product.counter)
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
        setTotalProducts();
        
    }

    const clear = () => {
        setCartProducts([])
        setTotalProducts(0)
    }

    console.log("cartProducts: ", cartProducts)
    const data = {
        cartProducts,
        setCartProducts,
        addProductToCart,
        clear,
        removeProductFromCart,
        totalProducts

    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider