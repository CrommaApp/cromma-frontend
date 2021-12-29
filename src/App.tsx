import React from 'react';
import './index.css';
import { Redirect, Route, Switch } from 'react-router';
import Home from '@pages/home';
import Result from '@pages/result';
import Layout from '@components/layouts';
import SearchNewsService from '@services/search-news';

type Props = {
	searchNewsService: SearchNewsService;
};

const App = ({ searchNewsService }: Props) => {
	return (
		<Layout>
			<Switch>
				<Route exact path="/">
					<Home searchNewsService={searchNewsService} />
				</Route>
				<Route exact path="/result/:keyword" component={Result} />
				<Redirect path="*" to="/" />
			</Switch>
		</Layout>
	);
};

export default App;
