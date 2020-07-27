import React,{ useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './styles.css'

export default function PanelCarrito(){

	let compraTotal = 0 

	const cart = useSelector(state => state.cart)

	if(cart.length !== 0){
		for(let nro = 0; nro < cart.length; nro++){

			let precio = parseFloat(cart[nro].precio)

			compraTotal = compraTotal + precio 
		}
	}

	return(
		<div className="container-panel_carrito">
			<div>
				<h3>Precio total: R$ {compraTotal.toFixed(2)}</h3>
			</div>

			<div className="panel_carrito-btn">
				<button>Enviar Pedido</button>
			</div>
		</div>
	)
}