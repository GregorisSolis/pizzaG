import React, {Component} from 'react'
import Header from '../../components/Header'
import api from '../../services/api'
import './styles.css'

import ItemsProducto from '../../components/ItemsProducto'
import Bebidas from '../../components/Bebidas'

class Pizza extends Component {
    state = {
        productos: [],
        pizza:[]
    }

    componentDidMount() {
      this.loadProdcutos()
    }

    loadProdcutos = async () => {

        api.get('/productos/todos')
        .then(res => {
            this.setState({ productos: res.data.productos });
             this.loapPizza()
        })
        .catch(e => {
            console.log('error al cargar los productos' + e)
        })
    }

    loapPizza = () => {
        let selecionados = []

        for (let i = 0; i < this.state.productos.length; i++) {

            if(this.state.productos[i].categoria === 'pizzas'){
                selecionados.push(this.state.productos[i])
            }
        }
        this.setState({ pizza: selecionados });
    }

	render(){

		const {pizza} = this.state
		return(
			<div className="container-pizza">
    			<Header/>
                    <div className="container-listProducto">
                        <h1>Pizza</h1>
                        <div className="info-producto">
                            {pizza.map(producto =>(
                            <article key={producto._id} className="items-producto">
                            <ItemsProducto 
                            name={producto.name}
                            precio={producto.precio} 
                            description={producto.description}
                            cantidad={producto.cantidad}
                            />
                            </article>
                            ))}
                        </div>
                        <Bebidas/>
                    </div>
			</div>
		)
	}
}

export default Pizza