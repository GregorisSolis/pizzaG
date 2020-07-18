import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import { logout } from '../../services/auth'
import './styles.css'

//img
import burgerImg from './pizza.png'

class Header extends Component{
	state = {
		user: false,
		isAdmin: false,
		sesion: '4rr55z'
	}
	
	componentDidMount() {
      this.hayUser()
    }

    hayUser = () =>{
    	let verificadorUSer = localStorage.getItem('@superloto-app/nameUser')
    	let verificadorAdmin = localStorage.getItem('@superloto-app/sesion')

    	if (verificadorUSer !== null){
    		this.setState({user: true})

    		if (verificadorAdmin !== this.state.sesion){
    			this.setState({isAdmin: true})
    		}
    	}
    }

	handleLogout = () => {
		localStorage.removeItem('@superloto-app/sesion')
		localStorage.removeItem('@superloto-app/nameUser')
		logout()
	}

	render(){

		const {isAdmin} = this.state

		return(
			<header className="container-header">
			<div id="main-header">
				<div className="logo-header">
					<h2>Pizza G</h2>
					<img src={burgerImg} alt="logo de pizza g"/>
				</div>
				<div className="routes-header">
					<Link to="/">Home</Link>
					<Link to="/">Carrito</Link>
					{isAdmin ? <Link to="/admin/gerencia">Admin</Link> : ''}
					{this.state.user ? <Link to="/login" onClick={this.handleLogout}>Salir</Link>:
					<Link to="/login">Entrar</Link>}
				</div>
			</div>
			</header>
		)
	}
}

export default Header