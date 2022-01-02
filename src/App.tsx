import React, { useEffect, useState } from 'react';
import './index.css';
import { Redirect, Route, Switch } from 'react-router';
import Home from '@pages/home';
import Result from '@pages/result';
import Layout from '@components/layouts';
import SearchNewsService from '@services/search/search-news';
import AuthService from '@services/auth/auth-service';
import { useSetRecoilState } from 'recoil';
import { userState } from '@stores/user';

type Props = {
	searchNewsService: SearchNewsService;
	authService: AuthService;
};

const App = ({ searchNewsService, authService }: Props) => {
	const [isUserChecked, setIsUserChecked] = useState(false);
	const setUser = useSetRecoilState(userState);

	const checkUserState = async () => {
		setIsUserChecked(false);

		try {
			const result = await authService.getMyInfo();

			if (result.data !== null) {
				setUser((prev) => {
					return {
						...prev,
						isLogin: true,
						id: result.data!.userId,
						recentKeywords: result.data!.Keywords.slice(0, 5),
					};
				});
			} else {
				setUser((prev) => {
					return {
						...prev,
						isLogin: false,
						id: '',
						recentKeywords: [],
					};
				});
			}
		} catch (error) {
			console.error(error);
		}

		setIsUserChecked(true);
	};

	useEffect(() => {
		checkUserState();
	}, []);

	return (
		<>
			{isUserChecked && (
				<Layout authService={authService}>
					<Switch>
						<Route exact path="/">
							<Home searchNewsService={searchNewsService} />
						</Route>
						<Route exact path="/result/:keyword">
							<Result searchNewsService={searchNewsService} />
						</Route>
						<Redirect path="*" to="/" />
					</Switch>
				</Layout>
			)}
		</>
	);
};

export default App;
