import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../services/api'

class SignUp extends Component {
    state = {
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
            this.setState({ productos: res.data.productos });
        })
        .catch(e => {
            console.log('error al cargar los productos' + e)
        })
    }
    
    render(){

        const {productos} = this.state

        return(
            <div>
            <h1>Hola {this.state.name_user}, Vamos a comprar?</h1>
                <div>
                    {productos.map(producto =>(
                    <article key={producto._id}>
                        <strong>{producto.name}</strong>
                        <p>{producto.description}</p>
                    </article>
                    ))}
                </div>
            </div>
        )
    }
}

export default withRouter(SignUp);
