import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function IconCart(){

	const length = useSelector(state => state.cart.length)

	console.log(length)

    return <Link to="/carrito">Carrito {length}</Link>
}