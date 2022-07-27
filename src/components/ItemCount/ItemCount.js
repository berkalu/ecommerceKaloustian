import React from 'react';
import { useState } from 'react';
import './ItemCount.scss'

const ItemCount = ({stock, initial, onAdd }) => {

    const [counter, setCounter] = useState(initial)

    const addNumber = () => {
        if (stock > counter){
            setCounter (counter + 1)
        }
    };

    const removeNumber = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    };

    return (
        <div className='contProductos'>
            <button className='contador' onClick={removeNumber}>-</button>
            <p>{counter}</p>
            <button className='contador' onClick={addNumber}>+</button>
        </div>
    )

};

export default ItemCount;