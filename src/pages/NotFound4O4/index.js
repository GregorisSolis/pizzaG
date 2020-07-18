import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'

 const NotFound = () =>{
 	return(
 	<div className="container-NotFound">
 		<div className="NotFound-text">
 			<h2>oops..! esta pagina no existe :(</h2>
			<h1>NOT FOUND 4O4!!</h1>
			<Link to="/">regresar al menú principal</Link>
 		</div>
	</div>
 	)
}

export default NotFound
