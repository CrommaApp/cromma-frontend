import React from 'react';
import './index.css';
import { Redirect, Route, Switch } from 'react-router';
import Home from '@pages/home';
import Result from '@pages/result';
import Layout from '@components/layouts';

const App = () => {
	return (
		<Layout>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/result/:keyword" component={Result} />
				<Redirect path="*" to="/" />
			</Switch>
		</Layout>
	);
};

export default App;
