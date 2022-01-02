import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SearchNewsService from '@services/search/search-news';
import { RecoilRoot } from 'recoil';
import AuthService from '@services/auth/auth-service';

const searchNewsService = new SearchNewsService();
const authService = new AuthService();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<RecoilRoot>
				<App searchNewsService={searchNewsService} authService={authService} />
			</RecoilRoot>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);
