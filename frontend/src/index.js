import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store';
import { restoreCSRF, csrfFetch } from './store/csrf';
// import * as sessionActions from './store/session';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
	restoreCSRF();

	window.csrfFetch = csrfFetch;
	window.store = store;
	// window.sessionActions = sessionActions;
}

function Root() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	);
}

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Root />
	</React.StrictMode>
);
