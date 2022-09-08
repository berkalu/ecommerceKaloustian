import React from 'react';
import { useState, useContext } from 'react';
import './ItemCount.scss'
import { CartContext } from '../../context/CartContext';
import swal from 'sweetalert';

const ItemCount = ({setCantidadSelected, stock, initial, productData }) => {
    const { addProductToCart} = useContext(CartContext)
    const [counter, setCounter] = useState(initial);
    
    const alertSwal = () =>{
        swal({
            text: 'Producto: '+productData.title,
            title: 'AGREGASTE '+ counter +' UNIDAD/ES AL CARRITO!',
            icon: productData.image,
    });
    }

    return (
        <div className="contProductos">
            <div className='contContador'>
                <button
                    className="contador"
                    onClick={() => {
                        if (counter > 1) setCounter(counter - 1);
                    }}
                    disabled={counter === initial}
                >
                    -
                </button>
                <span className="counter">{counter}</span>
                <button
                    className="contador"
                    onClick={() => {
                        if (counter < stock) setCounter(counter + 1);
                    }}
                    disabled={counter === stock}
                >
                    +
                </button>
            </div>
                
                <button
                className="comprar2"
                onClick={() => {
                    addProductToCart({...productData, counter });
                    setCounter(1);
                    setCantidadSelected(counter)
                }}
                disabled={stock === 0 ? true : null}
            >
                AGREGAR AL CARRITO
            </button>
        </div>
        
    );
};

export default ItemCount;