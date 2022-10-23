import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { GlobalStyle } from './GlobalStyle';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<BrowserRouter>
		<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
