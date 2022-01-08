import React, { useEffect, useState } from 'react';
import './index.css';
import { Redirect, Route, Switch } from 'react-router';
import Home from '@pages/home';
import Layout from '@components/layouts';
import AuthService from '@services/auth/auth-service';
import { useSetRecoilState } from 'recoil';
import { userState } from '@stores/user';
import PostWrite from '@pages/post/write';
import PostDetail from '@pages/post/detail';

type Props = {
	authService: AuthService;
};

const App = ({ authService }: Props) => {
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
					};
				});
			} else {
				setUser((prev) => {
					return {
						...prev,
						isLogin: false,
						id: '',
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
							<Home />
						</Route>
						<Route exact path="/post/write">
							<PostWrite />
						</Route>
						<Route exact path="/post/:id">
							<PostDetail />
						</Route>
						<Redirect path="*" to="/" />
					</Switch>
				</Layout>
			)}
		</>
	);
};

export default App;
