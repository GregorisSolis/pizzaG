import React, {Component} from 'react'
import NotFound from '../../NotFound4O4'
import Header from '../../../components/Header'
import ItemsProducto from '../../../components/ItemsProducto'
import api from '../../../services/api'
import { sesion } from '../../../credencial/'

import './styles.css'

class Setting extends Component{
	state = {
		user: false,
		isAdmin: false,
		error:'',
		success:'',
		producto_id:'',
		name: '',
		precio: '',
		description: '',
		categoria: '',
		productos: [],
		edicion: false
	}

	componentDidMount() {
      this.hayUser()
      this.loadProdcutos()
      this.timeMsg()
    }

    loadProdcutos = async () => {

        api.get('/productos/todos')
        .then(res => {
            this.setState({ productos: res.data.productos });
        })
        .catch(e => {
            console.log('error al cargar los productos' + e)
        })
        this.timeMsg()
    }

	handleRegisterProducto = async e => {
		e.preventDefault()

		const {name,precio,description,categoria} = this.state

		if(!name || !precio || !description || !categoria){
			this.setState({error: "debes llenar todos los campos!"})
		}
		else {
			try{
				await api.post('/productos', {name,precio,description,categoria})
				.then(resp =>{
					this.loadProdcutos()
					this.setState({success :'producto agregado exitosamente!'})
				})
				.catch(e => {
					this.setState({error: "el producto no se agrego a la base de datos"})
					console.log(e)
				})
			}
			catch(err) {
				console.log(err)
				this.setState({error: "ocurrio un error al cadastrar el producto"})
			}
		}
	this.timeMsg()
	this.limpiarInputs()
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
    this.timeMsg()
    }

    deleteProduct = async _id =>{
    	await api.delete(`/productos/${_id}`)
    	.then(res =>{
    		this.loadProdcutos()
    		this.setState({success :'producto eliminado exitosamente!'})
    	})
    	.catch(e =>{
    		this.setState({error: 'no se pudo eliminar el producto'})
    	})
    this.timeMsg()
    }

    editarProduct = e =>{
    	e.preventDefault()

    	const {name,precio,description,categoria,producto_id} = this.state

				api.put(`/productos/${producto_id}`,
							 {name,precio,description,categoria})
				.then(resp =>{
					this.loadProdcutos()
					this.setState({success :'producto se ha editado exitosamente!'})
				})
				.catch(err => {
					this.setState({error: "el producto no pudo ser editado"})
					console.log(err)
				})
			this.timeMsg()
			this.limpiarInputs()
			}

    activarEdicion = (producto) => {
    	this.setState({edicion: true})

    	this.setState({producto_id: producto._id})
    	this.setState({name: producto.name})
    	this.setState({precio: producto.precio})
    	this.setState({description: producto.description})
    	this.setState({categoria: producto.categoria})
    }
    limpiarInputs = () =>{
    	this.refs.nameProducto.value="";
    	this.refs.precio.value="";
    	this.refs.description.value="";
    	this.refs.value="";
    	this.refs.categoria.value="";

    	this.setState({edicion: false})

    	this.setState({producto_id: ''})
    	this.setState({name:''})
    	this.setState({precio:''})
    	this.setState({description:''})
    	this.setState({categoria:''})
    }

    timeMsg = () => {
    	setTimeout(() => {
    		this.setState({error: ''})
    		this.setState({success: ''})
		}, 3000);
    }

	render(){
		const {isAdmin, productos,edicion} = this.state
		return(
		<>
		<Header/>
		{isAdmin ?
		<div className="container-setting">
			<div className="container-inputs">
			{edicion ?
			<form className="container-form_producto" onSubmit={this.editarProduct}>
			<h2>Editar producto</h2>
				<input
					className="input-name_producto" 
					type="text"
					name="name"
					placeholder="nombre del producto"
					ref="nameProducto"
					value={this.state.name}
					onChange={e => this.setState({ name: e.target.value})}
				/>
				<input
					className="input-precio_producto" 
					type="text"
					name="precio"
					placeholder="precio del producto"
					ref="precio"
					value={this.state.precio}
					onChange={e => this.setState({ precio: e.target.value})}
				/>
				<input
					className="input-categoria_producto" 
					type="text"
					name="categoria"
					placeholder="categoria del producto"
					ref="categoria"
					value={this.state.categoria}
					onChange={e => this.setState({ categoria: e.target.value})}
				/>
				<input
					className="input-description_producto" 
					type="text"
					name="description"
					placeholder="descripcion del producto"
					ref="description"
					value={this.state.description}
					onChange={e => this.setState({ description: e.target.value})}
				/>
				<div className="container-btn">
					<button className="btn-edit" type="submit">editar producto</button>
					<button className="btn-cancelar-edit" onClick={this.limpiarInputs}>cancelar edicion</button>
				</div>
			</form>
				:
			<form className="container-form_producto" onSubmit={this.handleRegisterProducto}>
			<h2>Registrar producto</h2>
				<input
					className="input-name_producto" 
					type="text"
					name="name"
					ref="nameProducto"
					placeholder="nombre del producto"
					onChange={e => this.setState({ name: e.target.value})}
				/>
				<input
					className="input-precio_producto" 
					type="text"
					name="precio"
					ref="precio"
					placeholder="precio del producto"
					onChange={e => this.setState({ precio: e.target.value})}
				/>
				<input
					className="input-categoria_producto" 
					type="text"
					name="categoria"
					ref="categoria"
					placeholder="categoria del producto"
					onChange={e => this.setState({ categoria: e.target.value})}
				/>
				<input
					className="input-description_producto" 
					type="text"
					name="description"
					ref="description"
					placeholder="descripcion del producto"
					onChange={e => this.setState({ description: e.target.value})}
				/>
				<div className="container-btn">
					<button className="btn-register" type="submit">registrar producto</button>
				</div>
			</form>
			}
			</div>

			{this.state.error && 
				<div className="container-msg">
					<p className="error-msg">{this.state.error}</p>
				</div>
			}

			{this.state.success && 
				<div className="container-msg">
					<p className="success-msg">{this.state.success}</p>
				</div>
			}
			<div className="container-listaProducto">
				    {productos.map(producto =>(
                    <article key={producto._id} className="items-producto">
                        <ItemsProducto
                            name={producto.name}
                            precio={producto.precio} 
                            description={producto.description}
                            />
	                    <div className="btn-action">
		                    <button className="btn-eliminar" onClick={() => this.deleteProduct(producto._id)}>eliminar</button>
		            		<button className="btn-editar" 	 onClick={() => this.activarEdicion(producto)}>editar</button>
	                    </div>
                    </article>
                    ))}
			</div>
		</div>
		: <NotFound/>}
		</>
		)
	}
}

export default Setting