import React, {Component} from 'react'
import api from '../../services/api'
import './styles.css'

import ItemsProducto from '../../components/ItemsProductos'


class Bebidas extends Component {
    state = {
        productos: [],
        bebidas:[]
    }

    componentDidMount() {
      this.loadProdcutos()
    }

    loadProdcutos = async () => {

        api.get('/productos/todos')
        .then(res => {
            this.setState({ productos: res.data.productos });
             this.loapBebidas()
        })
        .catch(e => {
            console.log('error al cargar los productos' + e)
        })
    }

    loapBebidas = () => {
        let selecionados = []

        for (let i = 0; i < this.state.productos.length; i++) {
            if(this.state.productos[i].categoria === 'bebidas'){
                selecionados.push(this.state.productos[i])
            }
        }
        this.setState({ bebidas: selecionados });
    }

	render(){

		const {bebidas} = this.state
		return(
                    <div className="container-bebidas">
                        <h1>Bebidas</h1>
                        <div className="info-producto">
                            {bebidas.map(producto =>(
                            <article key={producto._id} className="items-producto">
                            <ItemsProducto 
                            name={producto.name}
                            precio={producto.precio} 
                            description={producto.description}
                            />
                            </article>
                            ))}
                        </div>
                    </div>
		)
	}
}

export default Bebidas