import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import Header from '../../components/Header'
import './styles.css'

//img
import banner from './banner.png'

class SignUp extends Component {
    state = {
        name_user: "",
        user: false
    }

    componentDidMount() {
        this.loadInfoUser()
        this.hayUser()
    }

    //cargar info de user
    loadInfoUser = async () => {
        const userName = localStorage.getItem('@superloto-app/nameUser')
        this.setState({ name_user: userName})
    }

    hayUser = () =>{
        let verificadorUSer = localStorage.getItem('@superloto-app/nameUser')
        if (verificadorUSer != null){
            this.setState({user: true})
        }
    }
    
    render(){

        const {name_user, user} = this.state

        return(
            <div className="container-home">
                <Header/>
                <div className="container-banner">
                    <img src={banner} alt="banner"/>
                    <div className="container-titulos">
                        <h1 className="titulo-banner">
                        Hola {user ? name_user : 'Bienvenido'},
                        </h1>
                        <h4 className="subtitulo-banner">¿Que te gustaria comer hoy?</h4>
                    </div>
                </div>

                <div className="container-categorias">
                    <div className="container-postres">
                        <Link to="/postres"><p>Postre</p></Link>
                    </div>
                    <div className="container-pizzas">
                        <Link to="/pizzas"><p>Pizza</p></Link>
                    </div>
                    <div className="container-burger">
                        <Link to="/hamburguesas"><p>Hamburguesa</p></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SignUp);
