import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import AuthService from '@services/auth/auth-service';

const authService = new AuthService();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<RecoilRoot>
				<App authService={authService} />
			</RecoilRoot>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);
