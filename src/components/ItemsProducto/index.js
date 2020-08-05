import React,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../store/cart'
import './stylesItems.css'
import '../../styles.css'

function ItemsProducto (props) {


    let [count, setCount] = useState(0)    
    const dispatch = useDispatch() 

    function addItemProducto(producto,id){
        dispatch(addItem(producto,id))
        setCount(count + 1)
    }


        return(
            <>
            <div className="titulo-producto" key={props._id}>
                <strong>{props.name}</strong>
                 <h4>R$ {props.precio}</h4>
            </div>

            <div className="funcionalidades-productos">
                 <div className="description">
                    <p>{props.description}</p>
                </div>
            </div>


            <div className="cantidades">
                <div 
                    className="btn-agregar" 
                    onClick={() => addItemProducto(props,props._id)}>
                        <div className="icon-cart"></div>
                </div>
                <h3>{count}</h3>
            </div>
            

            </>
        )
}

export default ItemsProducto