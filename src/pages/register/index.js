import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import * as yup from 'yup'
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
		}else 
		if(password !== password2){
				this.setState({error: "las contraseña no coinciden."})
			} 
		else {
			try{
				await api.post('/auth/register', {name, password, email})
				.then(resp =>{
					this.props.history.push('/')
				})
				.catch(e => {
					this.setState({error: "email ya registrado!"})
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
			<form className="container-form" onSubmit={this.handleRegister} validationSchema={validations}>
				<h2>Register</h2>
				<div className="container-input_register">
					<input
						className="input-name_register" 
						type="text"
						name="name"
						placeholder="nome do user"
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
						placeholder="senha"
						onChange={e => this.setState({ password: e.target.value})}
					/>
					<input
						className="input-password2_register" 
						type="password"
						name="password2"
						placeholder="confirme a senha"
						onChange={e => this.setState({ password2: e.target.value})}
					/>
				</div>
				<div className="container-btn">
					<button className="btn-register" type="submit">register</button>
				</div>
				<Link to="/" className="link-login">já tem uma conta?</Link>
				{this.state.error && <p>{this.state.error}</p>}
			</form>
		</div>
		)
	}
}

export default Register