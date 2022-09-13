import { createContext, useState } from "react";
import swal from 'sweetalert';

export const CartContext = createContext()


const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])


    const addProductToCart = (item, qty) => {
        const newItem = {...item, qty};
        if (cartProducts.some(product=> product.id == newItem.id)){       
            swal({
                icon: 'error',
                text: 'YA TIENES ESTE PRODUCTO EN EL CARRITO',
            })
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
            swal({
                icon: 'success',
                text: 'AGREGASTE EL PRODUCTO AL CARRITO',
            })
        }         
    }
    

    const removeProductFromCart = (id) => {
        const newCart = cartProducts.filter((product) => product.id !== id);
        setCartProducts(newCart);
    }

    const clear = () => {
        setCartProducts([])
    }

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