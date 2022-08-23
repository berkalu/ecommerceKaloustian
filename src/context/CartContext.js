import { createContext, useState } from "react";

export const CartContext = createContext()


const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    const [totalProducts, setTotalProducts] = useState(0)

        const addProductToCart = (product) => {
            if (!cartProducts.some(el=>el.id == product.id)){
                setCartProducts([...cartProducts, product])
                setTotalProducts(totalProducts + product.counter)
            }
            else{
                const newCart = cartProducts.map(el=>{
                    if(el.id == product.id){
                        el.counter = el.counter + product.counter;
                    }
                    return el;
                });
                setCartProducts(newCart);
            }
};

    const removeProductFromCart = (id) => {
        const newCart = cartProducts.filter((product) => product.id !== id);
        setCartProducts(newCart);
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