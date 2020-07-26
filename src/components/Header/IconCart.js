import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../../styles.css'

export default function IconCart(){

	const length = useSelector(state => state.cart.length)

    return (
    <Link className="link-cart" to="/carrito"><i className="icon-cart"><p>{length}</p></i></Link>
    )
}