import React, { useState } from 'react'
import './styles.css'

const  ItemsProducto = props => {

	let [count, setCount] = useState(0);

	if(count === -1){
		count++
	}

	return(
	<>
		<div className="titulo-producto">
            <strong>{props.name}</strong>
            <h4>R$ {props.precio}</h4>
        </div>

        <div className="funcionalidades-productos">
            <div className="description">
                <p>{props.description}</p>
            </div>
            <div className="cantidades">
                <button onClick={() => setCount(count + 1)}>+</button>
               	<p className="count-producto" >{count}</p>
                <button onClick={() => setCount(count - 1)}>-</button>
            </div>
        </div>
	</>
	)
}

export default ItemsProducto