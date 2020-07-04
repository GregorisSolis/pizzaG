import React, { Component } from 'react'
import api from '../../services/api'

import './styles.css'

export default class Register extends Component{
	state = {
		user: []
	}

	componentDidMount(){
		this.loadProducts()
	}

	loadProducts = async () => {
		const response = await api.post('/auth/register')

		this.setState({ user: response.data})
	}

	render(){
		return(
		<div className="container-register">
    		<form>
      			<div className="container-input">
          			<input type="text" name="email" placeholder="email" className="input-email" />
          			<input type="password" name="password" placeholder="password" className="input-pass" />
      			</div>
      			<div className="container-btn">
       				<button className="btn-register">register</button>
      			</div>
  			</form>
		</div>
		)
	}

}