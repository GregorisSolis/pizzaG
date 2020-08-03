import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../../components/Header'
import NotFound from '../NotFound4O4'

import { sesion } from '../../credencial/'
import './styles.css'

import bannerAdmin from './img/bannerAdmin.png'
import iconTuerca from './img/tuerca.png'
import pedidoIcon from './img/pedidoIcon.png'

class Admin extends Component{
	state = {
		user: false,
		isAdmin: false,
	}
	
	componentDidMount() {
      this.hayUser()
    }

    hayUser = () =>{
    	let verificadorUSer = localStorage.getItem('@superloto-app/nameUser')
    	let verificadorAdmin = localStorage.getItem('@superloto-app/sesion')

    	if (verificadorUSer !== null){
    		this.setState({user: true})

    		if (verificadorAdmin !== sesion){
    			this.setState({isAdmin: true})
    		}
    	}
    }

		render(){
			const {isAdmin} = this.state
		return(
		<>
		{isAdmin ?
		<div className="container-admin">
			<Header/>
				<div className="bannerAdmin">
						<img src={bannerAdmin} alt="mesa con comida" />
						<h1 className="titulo-banner_admin">Bienvenido, jefe!</h1>
				</div>
				<div className="container-administracion">
					<div className="icon-pedidos">
						<Link to="/admin/gerencia/pedidos"><img src={pedidoIcon} alt="icono de pedidos" /></Link>
					</div>
					<div className="icon-herramientas">
						<Link to="/admin/gerencia/setting"><img src={iconTuerca} alt=" icono tuerca"/></Link>
					</div>
				</div>
			</div> :
			<NotFound/>
		}
		</>
		)
	}
}

export default Admin