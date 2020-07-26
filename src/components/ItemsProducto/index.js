import React,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem, removeItem } from '../../store/cart'
import './styles.css'
import '../../styles.css'

function ItemsProducto (props) {


    let [count, setCount] = useState(0)    
    const dispatch = useDispatch() 

    function addItemProducto(producto,id){
        dispatch(addItem(producto,id))
        setCount(count + 1)
    }

    //uso name por que no estoy obteniendo el id
    function removeItemCart(name){
        dispatch(removeItem(name))
        setCount(count - 1)
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
                <div className="btn-agregar">
                    <div onClick={() => addItemProducto(props,props._id)} className="icon-cart"></div>
                </div>
                <h3>{count}</h3>
            </div>
            

            </>
        )
}

export default ItemsProducto