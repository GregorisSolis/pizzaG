import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../store/cart'
import './styles.css'


function ItemsProducto (props) {
    
    const dispatch = useDispatch() 

    function addItemProducto(producto,id){
        dispatch(addItem(producto,id))
    } 
        return(
            <>
            <div className="titulo-producto">
                <strong>{props.name}</strong>
                 <h4>R$ {props.precio}</h4>
            </div>

            <div className="funcionalidades-productos">
                 <div className="description">
                    <p>{props.description}</p>
                </div>
            </div>

            <div className="cantidades">
                <button onClick={props.onIncrementProduct}>+</button>
                <p className="count-producto"></p>
                <button onClick={props.onRemoveProduct}>-</button>
            </div>
            
            <div>
                <button onClick={() => addItemProducto(props,props._id)}>enviar</button>
            </div>
            </>
        )
}

export default ItemsProducto