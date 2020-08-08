import React,{Component} from 'react'
import './stylesStatus.css'

import api from '../../services/api'
import Header from '../../components/Header'
import CarterStatus from '../../components/CarterStatus'

class statusPedido extends Component{
	state = {
		hayPedido: false,
		pedidos: [],
		myPedido: [],
		positionPedido: 0
	}

	componentDidMount() {
      this.loadPedido()
      }

	loadPedido = () =>{
        api.get('/pedido/todos')
        .then(res => {
            this.setState({ pedidos: res.data.pedido});
            this.pedidoUser()
        })
        .catch(e => {
            console.log('error al cargar los pedidos' + e)
        })
	}

	pedidoUser = () =>{

		const {pedidos, myPedido} = this.state

		let emailUser = localStorage.getItem('@superloto-app/emailUser')

		for (var i = 0; i < pedidos.length; i++) {
			if(pedidos[i].assignedTo === emailUser){
				myPedido.push(pedidos[i])
				this.setState({hayPedido: true})

				this.setState({positionPedido: myPedido[i].estado})
			}
		}	
	}
		

	render(){

		const {hayPedido, positionPedido} = this.state


		return(
			<>
			<Header/>
			<div className="container-estadoPedido">
			{hayPedido ? 
				<CarterStatus estado={positionPedido}/>
			 : <h1>Aun no has hecho un pedido.</h1>}
			</div>
			</>
		)
	}
}

export default statusPedido