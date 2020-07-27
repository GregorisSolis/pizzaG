import React from 'react'
import Header from '../../components/Header'
import ItemsDelCarrito from '../../components/ItemsDelCarrito'
import PanelCarrito from '../../components/PanelCarrito'
import { useSelector } from 'react-redux'
import './styles.css'

export default function Carrito() {
	
	const cart = useSelector(state => state.cart)


	return(
		<div className="container-carrito">
		<Header/>
		<PanelCarrito/>
			{cart.length === 0 ?(
				<div className="items-cart">
						<h1 className="carrito-titulo">Aun no tienes productos en el carrito.</h1>
				</div>
			):(
			<div className="container-items_compras">
				<ItemsDelCarrito key={cart._id}/>
			</div>
			)}
		</div>
	)
}