import React from 'react';
import { useState } from 'react';
import './ItemCount.scss'

const ItemCount = ({stock, initial, onAdd }) => {

    const [counter, setCounter] = useState(initial);
    const addProduct = (num) => {
      setCounter(counter + num);
    };
  
    return (
        <div className="contProductos">
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
    );
  };

export default ItemCount;