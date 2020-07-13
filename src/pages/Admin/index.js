import React,{Component} from 'react'
import Header from '../../components/Header'
import api from '../../services/api'

import './styles.css'

import bannerAdmin from './bannerAdmin.png'
import iconTuerca from './tuerca.png'
import pedidoIcon from './pedidoIcon.png'

class Admin extends Component{
	render(){
		return(
			<div className="container-admin">
			<Header/>
				<div className="bannerAdmin">
						<img src={bannerAdmin} alt="mesa con comida" />
						<h1 className="titulo-banner_admin">Bienvenido Admin</h1>
				</div>
				<div className="container-administracion">
					<div className="icon-pedidos">
						<img src={pedidoIcon} alt="icono de pedidos" />
					</div>
					<div className="icon-herramientas">
						<img src={iconTuerca} alt=" icono tuerca"/>
					</div>
				</div>
			</div>
		)
	}
}

export default Admin