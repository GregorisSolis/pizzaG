import React from 'react'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import SignIn from '../pages/Login'
import Register from '../pages/register'
import Home from '../pages/home'

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
			<Route exact path="/" component={SignIn} />
			<Route exact path="/register" component={Register} />
			<PrivateRoute exact path="/app" component={Home} />
			<Route exact path="*" component={() => <h1>NOT FOUND 4O4</h1>} />
		</Switch>
	</BrowserRouter>
)

export default Routes