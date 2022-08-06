import React from 'react';
import { useState } from 'react';
import './ItemCount.scss'

const ItemCount = ({setCantidadSelected, stock, initial }) => {

    const [counter, setCounter] = useState(initial);
    const addProduct = (num) => {
      setCounter(counter + num);
    };
    const onAdd = () => {
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