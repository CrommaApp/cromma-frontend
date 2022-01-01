import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SearchNewsService from '@services/search-news';
import { RecoilRoot } from 'recoil';

const searchNewsService = new SearchNewsService();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<RecoilRoot>
				<App searchNewsService={searchNewsService} />
			</RecoilRoot>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);
