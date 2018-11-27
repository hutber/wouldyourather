import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../common/configureStore'
import App from '../common/containers/App'

const { store, history } = configureStore()

hydrate(
	<Provider store={store}>
		<App history={history} />
	</Provider>,
	document.getElementById('root')
)

if (module.hot) {
	module.hot.accept('../common/containers/App', () => {
		hydrate(
			<Provider store={store}>
				<App history={history} />
			</Provider>,
			document.getElementById('root')
		)
	})
}
