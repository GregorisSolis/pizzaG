import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function HeaderMobil(props) {

	const length = useSelector(state => state.cart.length)
	
	return(
		<div className="container-Headermobil">

			<Link to="/" className="icon-home"></Link>

			<Link to="/carrito" className="subcontainer_cart">
			<div  className="icon-cart mobil-cart"></div>
			<p>{length}</p>
			</Link>

			<Link to="/estado-pedido" className="icon-truck"></Link>

			{props.veriAdmin ? 
				<Link to="/admin/gerencia" className="icon-cog"></Link> : null}

			{props.veriUser ? 
				<Link to="/login" onClick={() => props.logout()} className="icon-switch"></Link> 

				: 
				<Link to="/login"><h2>Login</h2></Link>}
		</div>
	)
}