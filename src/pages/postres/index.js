import React, {Component} from 'react'
import Header from '../../components/Header'
import bannerPostre from './bannerPostres.png'
import api from '../../services/api'
import './styles.css'

import ItemsProducto from '../../components/ItemsProductos'
import Bebidas from '../../components/Bebidas'

class Postre extends Component {
    state = {
        productos: [],
        postre:[]
    }

    componentDidMount() {
      this.loadProdcutos()
    }

    loadProdcutos = async () => {

        api.get('/productos/todos')
        .then(res => {
            this.setState({ productos: res.data.productos });
             this.loapPostre()
        })
        .catch(e => {
            console.log('error al cargar los productos' + e)
        })
    }

    loapPostre = () => {
        let selecionados = []

        for (let i = 0; i < this.state.productos.length; i++) {
            if(this.state.productos[i].categoria === 'postre'){
                selecionados.push(this.state.productos[i])
            }
        }
        this.setState({ postre: selecionados });
    }

	render(){

		const {postre} = this.state
		return(
			<div className="container-postre">
    			<Header/>
        			<div className="container-banner_postre">
                        <img src={bannerPostre} alt="banner"/>
                    <div className="container-listProducto">
                        <h1>Postres</h1>
                        <div className="info-producto">
                            {postre.map(producto =>(
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
			</div>
		)
	}
}

export default Postre