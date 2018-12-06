import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'

//Flat Level
import Home from './containers/Home'
import Add from './containers/Questions/Add'
//General
import NoMatch from './containers/NoMatch'

const routes = (
	<Fragment>
		<CssBaseline />
		<Switch>
			{/*//Flat Levels*/}
			<Route exact path="/" component={Home} />
			<Route exact path="/add" component={Add} />
			<Route component={NoMatch} />
		</Switch>
	</Fragment>
)

export default routes
