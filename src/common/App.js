import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import routes from './routes'
import { Router } from 'react-router-dom'
import './style.css'

const App = ({ history }) => {
	return (
		<ConnectedRouter history={history}>
			<Router history={history}>{routes}</Router>
		</ConnectedRouter>
	)
}

App.propTypes = {
	history: PropTypes.object
}

export default App
