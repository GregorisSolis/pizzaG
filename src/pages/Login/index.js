import React, { Component } from 'react'
import { Link , withRouter } from 'react-router-dom'

import api from '../../services/api'
import { login } from '../../services/auth'

import './styles.css'

class SignIn extends Component {
    state = {
        email: "",
        password: "",
        error: ""
    }
   
handleSignIn = async e => {
    e.preventDefault()

    const { email, password } = this.state
    if(!email || !password){
        this.setState({ error: "Escriba e-mail y la contraseña"})
    }else {
        try{
            const response = await api.post("/auth/authenticate", {email, password})
            login(response.data.token)
            
            localStorage.setItem('@superloto-app/nameUser', response.data.user.name)

            this.props.history.push("/app")
        }
        catch (err){
            this.setState({
                error: "error al hacer login, verifica!!"
            })
        }
    }
}

render(){
   return(
    <div className="container-login">
        <form onSubmit={this.handleSignIn}>
            {this.state.error && <p>{this.state.error}</p>}
            <div className="container-input">
            <input
                type="email"
                placeholder="e-mail"
                onChange={e => this.setState({ email: e.target.value})}
                className="input-email"
            />
            <input 
                type="password"
                placeholder="password"
                onChange={e => this.setState({ password: e.target.value})}
                className="input-pass"
            />
            </div>
            <button className="btn-login" type="submit">entrar</button>
            <Link to="/register">Criar conta grátis</Link>
            <Link to="/register">Você esqueceu sua senha?</Link>
        </form>
    </div>
   ) 
}
}
export default withRouter(SignIn)