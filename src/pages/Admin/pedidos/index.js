import React, {Component} from 'react'
import NotFound from '../../NotFound4O4'

import './styles.css'

class Pedidos extends Component{
	state = {
		user: false,
		isAdmin: false,
		sesion: '4rr55z'
	}
	
	componentDidMount() {
      this.hayUser()
    }

    hayUser = () =>{
    	let verificadorUSer = localStorage.getItem('@superloto-app/nameUser')
    	let verificadorAdmin = localStorage.getItem('@superloto-app/sesion')

    	if (verificadorUSer !== null){
    		this.setState({user: true})

    		if (verificadorAdmin !== this.state.sesion){
    			this.setState({isAdmin: true})
    		}
    	}
    }

	render(){
		const {isAdmin} = this.state
		return(
		<>
		{isAdmin ? 'ver pedidos' : <NotFound/>}
		</>
		)
	}
}

export default Pedidos