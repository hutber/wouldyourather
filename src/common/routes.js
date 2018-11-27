import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

//Paths
// import paths from '../config/paths.json';

//Flat Level
import Home from './containers/Home'
//General
import NoMatch from './containers/NoMatch'

const routes = (
	<Fragment>
		<Switch>
			{/*//Flat Levels*/}
			<Route exact path="/" component={Home} />
			<Route component={NoMatch} />
		</Switch>
	</Fragment>
)

export default routes
