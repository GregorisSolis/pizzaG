import React from 'react'
import './styles.css'

export default function ItemsPedidos(props){


	let list = props.pedido.pedido

	let pagoEn = false

	let precioTotal = parseFloat(props.precio)

	if(props.formaDePago === '1'){
		pagoEn = true
	}

	return(
		<div className="container-items_pedido" key={props._id}>
			<div className="itemA">
				<p><strong>Cliente:</strong> {props.nameCliente}</p>
				<p><strong>Total:</strong> R$ {precioTotal.toFixed(2)}</p>
				<p><strong>Pago en: </strong>{pagoEn ? 'Tarjeta' : 'Dinero'}</p>
			</div>
			<div className="itemC">
				<p><strong>Dirreccion: </strong>{props.direccion}</p>
				<p><strong>Observacion: </strong>{props.observacion}</p>
			</div>
			<div className="itemB">
				            {list.map(producto =>(
                            <article key={producto._id}  className="article-itemB">
	                            <p><strong>{producto.name}</strong> - {producto.description}</p>
 							</article>
                            ))}
			</div>
		</div>
	)
}