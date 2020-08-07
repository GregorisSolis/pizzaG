import React from 'react'
import './styles.css'

export default function CarterStatus(props) {

	const status = props.estado

	let position = ''

	let percentage = ""

	if (status === 0){
		percentage = "5%"
		position = 'En espera...'
	}

	if (status === 1){
		percentage = "30%"
		position = 'Preparando...'
	}

	if (status === 2){
		percentage = "85%"
		position = 'En camino...'
	}

	if (status === 3){
		percentage = "100%"
		position = 'Entregado'
	}

	return(
		<div className="container-cartelStatus">
			<div>
			<h2>Estado de su pedido</h2>
			</div>
			<div className="linea-status">
				<div className="statu"><h1>{position}</h1></div>
			</div>
			<div className="barra-carga">
				<div className="barra-carga_B" style={{width : percentage}}></div>
			</div>
			<button className="btn-actualizar" onClick={() => window.location.reload()}>Click aqui para actualizar el estado</button>
		</div>
	)
}