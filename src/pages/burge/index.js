import React, {Component} from 'react'
import Header from '../../components/Header'
import api from '../../services/api'
import './styles.css'

import ItemsProducto from '../../components/ItemsProducto'
import Bebidas from '../../components/Bebidas'

class Burger extends Component {
    state = {
        productos: [],
        burger:[]
    }

    componentDidMount() {
      this.loadProdcutos()
    }

    loadProdcutos = async () => {

        api.get('/productos/todos')
        .then(res => {
            this.setState({ productos: res.data.productos });
             this.loapBurger()
        })
        .catch(e => {
            console.log('error al cargar los productos' + e)
        })
    }

    loapBurger = () => {
        let selecionados = []

        for (let i = 0; i < this.state.productos.length; i++) {

            if(this.state.productos[i].categoria === 'burger'){
                selecionados.push(this.state.productos[i])
            }
        }
        this.setState({ burger: selecionados });
    }

	render(){

		const {burger} = this.state
		return(
			<div className="container-burger">
    			<Header/>
                    <div className="container-listProducto">
                        <h1>Hamburguesas</h1>
                        <div className="info-producto">
                            {burger.map(producto =>(
                            <article key={producto._id} className="items-producto">
                            <ItemsProducto 
                            name={producto.name}
                            precio={producto.precio} 
                            description={producto.description}
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

export default Burger