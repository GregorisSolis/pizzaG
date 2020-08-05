import React,{useState} from "react"
import api from '../../services/api'
import './styles.css'

import Swal from 'sweetalert2'

export default function SubPanelCarrito(props){

	let nameCliente = localStorage.getItem('@superloto-app/nameUser')

	let [tipoPago, setTipoPago] = useState(0)
	let [direccion, setDireccion] = useState('')
	let [description, setDescrition] = useState('')

	function handleRegisterPedido(formaDePago, precioTotal,direccion,description,pedido, namecliente){
			try{
				api.post('/pedido/enviar-pedido', {pedido, description, direccion, formaDePago, precioTotal, namecliente})
				.then(resp =>{
					Swal.fire('Gracias por comprar!','TU PEDIDO LLEGARA PRONTO!','success')
					setTimeout(function(){window.location.reload()}, 3800);
				})
				.catch(e => {
					console.log(e)
				})
			}
			catch(err) {
				console.log(err)
			}
	}

	return(
			<div className="container-sub_panelCarrito">
				<h3>Informacion del Pedido</h3>
				<div className="inputs-sub_panelCarrito">
						<div>
							<h5>Nombre: {nameCliente}</h5>
						</div>
						<input
							className="input-direccionPedido" 
							type="text"
							name="direccionPedido"
							placeholder="Direccion"
							onChange={e => setDireccion(e.target.value)}
						/>
						<input
							className="input-descriptionPedido" 
							type="text"
							name="descriptionPedido"
							placeholder="Descripción"
							onChange={e => setDescrition(e.target.value)}
						/>
						<div className="title-tipoPago">
							<h5>Tipo de pago</h5>
						</div>

						<div className="btn_tipoPago">			
							<button 
								className="btn_tarjeta"
								onClick={() => setTipoPago(1)}>
								Terjeta
							</button>

							<button 
								className="btn_dinero"
								onClick={() => setTipoPago(2)}>
								Dinero
							</button>

						</div>
				</div>
				<div className="btn-sub_panelCarrito">
					<button onClick={() => handleRegisterPedido(tipoPago, props.precio,direccion,description, props.compra, nameCliente)}>
						Confirmar Pedido
					</button>
				</div>
			</div>
	)
}