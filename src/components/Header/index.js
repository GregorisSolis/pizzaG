import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import { logout } from '../../services/auth'
import './styles.css'

class Header extends Component{

	handleLogout = () => {
		localStorage.removeItem('@superloto-app/nameUser')
		logout()
	}

	render(){
		return(
			<header className="container-header">
			<div id="main-header">
				<div className="logo-header">
					<h2>Super Loto</h2>
				</div>
				<div className="routes-header">
					<Link to="/">Home</Link>
					<Link to="/categorias">Categorias</Link>
					<Link to="/">Carrito</Link>
					<Link to="/" onClick={this.handleLogout}>Salir</Link>
				</div>
			</div>
			</header>
		)
	}
}

export default Header