import React, {Component} from 'react'
import Header from '../../components/Header'
import bannerBurger from './bannerBurger.png'
import api from '../../services/api'
import './styles.css'

import ItemsProducto from '../../components/ItemsProductos'

class Burger extends Component {
    state = {
        productos: [],
    }

    componentDidMount() {
      this.loadProdcutos()
    }

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
			<div className="container-burger">
			<Header/>
			<div className="container-banner_burger">
                <img src={bannerBurger} alt="banner"/>
                <div className="info-producto">
                    {productos.map(producto =>(
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
			</div>
		)
	}
}

export default Burger