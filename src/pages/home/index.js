import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../services/api'

class SignUp extends Component {
    state ={
        productos: [],
        name_user: "user undefined"
    }

    componentDidMount() {
        this.loadProdcutos();
        this.loadInfoUser()
    }

    //cargar info de user
    loadInfoUser = async () => {
        const userName = localStorage.getItem('@superloto-app/nameUser')
        this.setState({ name_user: userName})
    }

    //cargar los productos
    loadProdcutos = async () => {

        api.get('/productos/todos')
        .then(res => {
            this.setState({ productos: res.data });
            console.log(res.data)
        })
        .catch(e => {
            console.log('error al cargar los productos' + e)
        })
    }
    render(){
        return(
            <>
            <h1>Hola {this.state.name_user}, Bienvenido a Super Loto</h1>
            </>
        )
    }
}

export default withRouter(SignUp);