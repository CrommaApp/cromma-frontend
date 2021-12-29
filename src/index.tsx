import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SearchNewsService from '@services/search-news';

const searchNewsService = new SearchNewsService();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App searchNewsService={searchNewsService} />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);
