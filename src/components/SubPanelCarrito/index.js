import React,{useState} from "react"
import api from '../../services/api'
import './styles.css'

import Swal from 'sweetalert2'

export default function SubPanelCarrito(props){

	let nameCliente = localStorage.getItem('@superloto-app/nameUser')
	let assignedTo = localStorage.getItem('@superloto-app/emailUser')

	let [tipoPago, setTipoPago] = useState(0)
	let [direccion, setDireccion] = useState('')
	let [description, setDescrition] = useState('')
	let  aviso = ''

	function handleRegisterPedido(formaDePago, precioTotal,direccion,description,pedido, namecliente,assignedTo){
			try{
				api.post('/pedido/enviar-pedido', {pedido, description, direccion, formaDePago, precioTotal, namecliente, assignedTo})
				.then(resp =>{
					Swal.fire('Gracias por tu compra!','TU PEDIDO LLEGARA PRONTO!','success')
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

	if(tipoPago === 2){
	aviso = 'Por favor digite en la caja de descripción, con que billete cancelara la compra.'
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
						<p>{aviso}</p>
				</div>
				<div className="btn-sub_panelCarrito">
					<button onClick={() => handleRegisterPedido(tipoPago, props.precio,direccion,description, props.compra,nameCliente, assignedTo)}>
						Confirmar Pedido
					</button>
				</div>
			</div>
	)
}