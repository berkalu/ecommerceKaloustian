import React from 'react';
import { useState, useContext } from 'react';
import './ItemCount.scss'
import { CartContext } from '../../context/CartContext';


const ItemCount = ({cantidadSelected, setCantidadSelected, stock, initial, productData }) => {
    const { addProductToCart} = useContext(CartContext)
    const [counter, setCounter] = useState(initial);
    const cant = cantidadSelected;
    const addProduct = (num) => {
        setCounter(counter + num);
    };
    const onAdd = () => {
        console.log("agregar al carrito", productData)
        addProductToCart(productData, counter)
        setCantidadSelected(counter)
    }

    return (
        <div className="contProductos">
            <div className='contContador'>
                <button
                    className="contador"
                    onClick={() => addProduct(-1)}
                    disabled={counter === initial}
                >
                    -
                </button>
                <span className="counter">{counter}</span>
                <button
                    className="contador"
                    onClick={() => addProduct(+1)}
                    disabled={counter === stock}
                >
                    +
                </button>
            </div>
                
                <button
                className="comprar2"
                onClick={() => onAdd(counter)}
                disabled={stock === 0 ? true : null}
            >
                AGREGAR AL CARRITO
            </button>
        </div>
        
    );
  };

export default ItemCount;