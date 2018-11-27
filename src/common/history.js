import createBrowserHistory from 'history/createBrowserHistory'
import createMemoryHistory from 'history/createMemoryHistory'

let history
let createHistory
let type

if (typeof document !== 'undefined') {
	createHistory = createBrowserHistory
	type = 'createBrowserHistory'
} else {
	createHistory = createMemoryHistory
	type = 'createMemoryHistory'
}
history = createHistory()

export { history, type }
