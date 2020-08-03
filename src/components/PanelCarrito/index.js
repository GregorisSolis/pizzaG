import React,{ useState } from 'react'
import { useSelector } from 'react-redux'
import './styles.css'

import SubPanelCarrito from '../SubPanelCarrito'

export default function PanelCarrito(){

	let compraTotal = 0 

	const cart = useSelector(state => state.cart)

	if(cart.length !== 0){
		for(let nro = 0; nro < cart.length; nro++){

			let precio = parseFloat(cart[nro].precio)

			compraTotal = compraTotal + precio 
		}
	}

	let [isVisible, setIsVisible] = useState(false)

	return(
		<>
		{isVisible ? 
			<div className="container-subPanel">
				<div className="icon-cancel-circle" onClick={() => setIsVisible(false)}></div>
				<SubPanelCarrito precio={compraTotal} compra={cart}/>
			</div>
			 : ''}

		<div className="container-panel_carrito">
			<div>
				<h3>Precio total: R$ {compraTotal.toFixed(2)}</h3>
			</div>

			<div className="panel_carrito-btn">
				<button onClick={() => setIsVisible(true)}>Enviar Pedido</button>
			</div>
		</div>
		</>
	)
}