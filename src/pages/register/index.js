import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import api from '../../services/api'

import './styles.css'

class Register extends Component{
	state = {
		name: "",
		password: "",
		password2: "",
		email: "",
		error: ""
	}

	handleRegister = async e => {
		e.preventDefault()

		const {name, password, password2, email} = this.state

		if(!name || !password || !email || !password2){
			this.setState({error: "debes llenar todos los campos!"})

		}else if(password.length < 8){
				this.setState({error: "la contraseña debe tener mas de 8 caracteres"})
		} else if(password !== password2){
				this.setState({error: "las contraseña no coinciden."})
		}
		else {
			try{
				await api.post('/auth/register', {name, password, email})
				.then(resp =>{
					this.props.history.push('/login')
				})
				.catch(e => {
					this.setState({error: "email ya registrado!"})
					console.log(e)
				})
			}
			catch(err) {
				console.log(err)
				this.setState({error: "ocurrio un error al cadastrar user"})
			}
		}
	} 

	render(){
		return(
		<div className="container-register">
			<form className="container-form" onSubmit={this.handleRegister}>
				<h2>Registrar</h2>
				<div className="container-input_register">
					<input
						className="input-name_register" 
						type="text"
						name="name"
						placeholder="Primer nombre"
						onChange={e => this.setState({ name: e.target.value})}
					/>
					<input
						className="input-email_register" 
						type="text"
						name="email"
						placeholder="e-mail"
						onChange={e => this.setState({ email: e.target.value})}
					/>
					<input
						className="input-password_register" 
						type="password"
						name="password"
						placeholder="Contraseña"
						onChange={e => this.setState({ password: e.target.value})}
					/>
					<input
						className="input-password2_register" 
						type="password"
						name="password2"
						placeholder="Confirmar contraseña"
						onChange={e => this.setState({ password2: e.target.value})}
					/>
				</div>
				<div className="container-btn">
					<button className="btn-register" type="submit">Registrar</button>
				</div>
				<Link to="/login" className="link-login">Ya tienes una cuenta?</Link>
				{this.state.error && <p className="error-msg">{this.state.error}</p>}
			</form>
		</div>
		)
	}
}

export default Register