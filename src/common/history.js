import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';

let history;
let createHistory;

if (typeof document !== 'undefined') {
  createHistory = createBrowserHistory;
} else {
  createHistory = createMemoryHistory;
}
history = createHistory();

export default history;
