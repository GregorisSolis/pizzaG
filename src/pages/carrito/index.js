import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../../components/Header'

import { removeItem } from '../../store/cart'

export default function Carrito() {
	
	const cart = useSelector(state => state.cart)
	const dispatch = useDispatch()

	//uso name por que no estoy obteniendo el id
	function removeItemCart(name){
		dispatch(removeItem(name))
	}

	return(
		<div className="container-carrito">
		<Header/>
			<div className="items-cart">
				{cart.length === 0 ?( <p>Aun no hay productos en el carrito...</p>
					):(
					<React.Fragment>
						{cart.map((item) =>(
							<div key={item.name}>
								<p>{item.name}</p>
								<p>{item.description}</p>
								<p>{item.precio}</p>
								<button onClick={() => removeItemCart(item.name)}>eliminar</button>
							</div>
						))}
						
					</React.Fragment>
					)}
			</div>
		</div>
	)
}