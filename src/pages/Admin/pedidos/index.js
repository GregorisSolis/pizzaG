import React, {Component} from 'react'
import NotFound from '../../NotFound4O4'
import Header from '../../../components/Header'
import ItemsPedidos from '../../../components/ItemsPedidos'
import api from '../../../services/api'
import { sesion } from '../../../credencial/'
import './styles.css'

class Pedidos extends Component{
	state = {
		user: false,
		isAdmin: false,
		solicitudes: [],
        hayPedidos: false
	}
	
	componentDidMount() {
      this.hayUser()
      this.loadPedidos()
    }

    hayUser = () =>{
    	let verificadorUSer = localStorage.getItem('@superloto-app/nameUser')
    	let verificadorAdmin = localStorage.getItem('@superloto-app/sesion')

    	if (verificadorUSer !== null){
    		this.setState({user: true})

    		if (verificadorAdmin !== sesion){
    			this.setState({isAdmin: true})
    		}
    	}
    }

    loadPedidos = async () => {

        api.get('/pedido/todos')
        .then(res => {
            this.setState({ solicitudes: res.data.pedido })

           if(this.state.solicitudes.length !== []){
             this.setState({hayPedidos: true})
            }
        })
        .catch(e => {
            console.log('error al cargar los pedidos' + e)
        })
    }


	render(){
		const {isAdmin, solicitudes,hayPedidos} = this.state

		return(
		<>
		{isAdmin ? 

		<>
		<Header/>
            <div className="container-pedidos">
    		  {hayPedidos ? 
                <div className="container-list_pedidos">
                    {solicitudes.map(infoPedido =>(
                    <article key={infoPedido._id}>
                        <ItemsPedidos
                        nameCliente={infoPedido.namecliente}
                        precio={infoPedido.precioTotal} 
                        observacion={infoPedido.description}
                        direccion={infoPedido.direccion}
                        pedido={infoPedido}
                        formaDePago={infoPedido.formaDePago}
                    />
                    </article>
                    ))}
                </div>

        :
                <div className="items-cart">
                        <h1 className="carrito-titulo">Aun no hay pedidos.</h1>
                </div>
        }
            </div>
		</>


		 : <NotFound/>}
		</>
		)
	}
}

export default Pedidos