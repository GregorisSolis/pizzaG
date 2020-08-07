import React from 'react'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import SignIn from '../pages/Login'
import Register from '../pages/register'
import Home from '../pages/home'
import Burge from '../pages/burge'
import Pizza from '../pages/pizza'
import Postres from '../pages/postres'
import statusPedido from '../pages/statusPedido'
import Admin from  '../pages/Admin'
import Carrito from  '../pages/carrito'
import Pedidos from  '../pages/Admin/pedidos'
import Setting from  '../pages/Admin/setting'
import NotFound from '../pages/NotFound4O4'

import { isAuthenticated } from '../services/auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

const Routes = () => (
	<BrowserRouter>
		<Switch>
      <Route exact path="/" component={Home} />
			<Route exact path="/login" component={SignIn} />
			<Route exact path="/register" component={Register} />
      <Route exact path="/hamburguesas" component={Burge}/>
      <Route exact path="/pizzas" component={Pizza}/>
      <Route exact path="/postres" component={Postres}/>
      <PrivateRoute exact path="/carrito" component={Carrito}/>
      <PrivateRoute exact path="/estado-pedido" component={statusPedido}/>
      <PrivateRoute exact path="/admin/gerencia" component={Admin}/>
      <PrivateRoute exact path="/admin/gerencia/pedidos" component={Pedidos}/>
      <PrivateRoute exact path="/admin/gerencia/setting" component={Setting}/>
			<Route exact path="*" component={NotFound} />
		</Switch>
	</BrowserRouter>
)

export default Routes