import React, { Component } from 'react'
import { Link , withRouter } from 'react-router-dom'

import api from '../../services/api'
import { login } from '../../services/auth'

import './styles.css'

class SignIn extends Component {
    state = {
        email: "",
        password: "",
        error: "",
        esAdmin: false
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

            this.setState({esAdmin: response.data.user.isAdmin})

            if(this.state.esAdmin !== true){
                localStorage.setItem('@superloto-app/sesion', '4rr55z')
            }else{
                localStorage.setItem('@superloto-app/sesion', 'm4r4ng4')
            }

            this.props.history.push("/")
        }
        catch (err){
            this.setState({
                error: "el email o la contraseña esta errada!"
            })
        }
    }
}

render(){
   return(
    <div className="container-login">
        <form onSubmit={this.handleSignIn}>
            {this.state.error && <p className="error-msg">{this.state.error}</p>}
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
            <div className="container-anclas">
                <Link to="/register">Criar conta grátis</Link>
                <Link to="/register">Você esqueceu sua senha?</Link>
            </div>
        </form>
    </div>
   ) 
}
}
export default withRouter(SignIn)