import { createContext, useState } from "react";

export const CartContext = createContext()


const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])

    const addProductToCart = (item, qty) => {
        const newItem = {...item, qty};
        if (cartProducts.some(product=> product.id == newItem.id)){       
            console.warn('ya esta')
            const newCart = cartProducts.map( product =>{
                if(product.id == newItem.id){
                    product.qty = product.qty + newItem.qty;
                }
                return product;
            });
            setCartProducts(newCart);            

        }        
        else{        
            setCartProducts([...cartProducts, newItem]);
        }        
    }


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
        removeProductFromCart,
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider