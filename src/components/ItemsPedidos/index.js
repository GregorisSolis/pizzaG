import React,{useState} from 'react'
import './styles.css'

export default function ItemsPedidos(props){

	let estado = props.estadoEm

	let status = ''

	let list = props.pedido.pedido

	let pagoEn = false

	let precioTotal = parseFloat(props.precio)

	let [ valueDisplay, setValueDisplay] = useState('none')

	if(props.formaDePago === '1'){
		pagoEn = true
	} 
	
	if (estado === 0){
		status = 'En espera'
	}
	else if (estado === 1){
		status = 'Preparando'
	} 
	else if (estado === 2){
		status = 'En camino'
	}
	else if (estado === 3){
		status = 'Entregado'
	}
	
	return(

		<div className="container-items_pedido" key={props._id}>
		 <div className="isStatusVisible" style={{display : valueDisplay}}>

                    <div className="sub-container_isStatusVisible">
                        <p>Elige el nuevo estado</p>
                        <div className="option-btn">
                            <button onClick={() => props.preparando()}>Preparando</button>
                            <button onClick={() => props.enCamino()}>En camino</button>
                            <button onClick={() => props.entregaFine()}>Entregado</button>
                        </div>

                        <button className="btn_agregarStado"
                                onClick={() => props.enviarEstado(props._id,setValueDisplay('none'))}
                            >Agregar estado
                        </button>
                        <button 
							className="btn-cancelarEstado"
							onClick={() => setValueDisplay('none')}>Cerrar
						</button>
						
                    </div>
                </div>
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
			<div className="action-ItemPedido">
				<button 
					className="btn-itemsPedido"
					onClick={() => props.entregado(props._id)}>Pedido entregado
				</button>
			<div><p><strong>Estado:</strong> {status}</p></div>
				<button 
					className="btn-cambiarEstado"
					onClick={() => setValueDisplay('flex')}>Cambiar Estado
				</button>
			</div>
		</div>
	)
}