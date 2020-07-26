import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './styles.css'

import { removeItem } from '../../store/cart'

export default function ItemsDelCarrito() {
	
	const cart = useSelector(state => state.cart)

	const dispatch = useDispatch()

	//uso name por que no estoy obteniendo el id
	function removeItemCart(name){
		dispatch(removeItem(name))
	}

	return(
		<div className="container-Items_carrito">
			{cart.map((item) =>(
				<div className="item-producto_info" key={item.name}>
					<h3>{item.name}</h3>
					<p>{item.description}</p>
					<p>{item.precio}</p>
					
					<button onClick={() => removeItemCart(item.name)}>eliminar</button>
				</div>
			))}				
		</div>
	)
}