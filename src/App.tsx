import React, { lazy, Suspense, useEffect, useState } from 'react';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Layout from '@components/layouts';
import AuthService from '@services/auth/auth-service';
import { useSetRecoilState } from 'recoil';
import { userState } from '@stores/user';
import { errorStatusState } from '@stores/status';

const Home = lazy(() => import(/* webpackChunkName: "Home" */ '@pages/home'));
const PostUpload = lazy(() => import(/* webpackChunkName: "PostUpload" */ '@pages/post/upload'));
const PostDetail = lazy(() => import(/* webpackChunkName: "PostDetail" */ '@pages/post/detail'));

type Props = {
	authService: AuthService;
};

const App = ({ authService }: Props) => {
	const [isUserChecked, setIsUserChecked] = useState(false);
	const setUser = useSetRecoilState(userState);

	const setErrorStatus = useSetRecoilState(errorStatusState);

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
			setErrorStatus({
				errorMessage: '내 정보를 불러오는데 실패했습니다.',
			});
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
					<Suspense fallback={null}>
						<Routes>
							<Route path="" element={<Home />}></Route>
							<Route path="post/upload" element={<PostUpload />}></Route>
							<Route path="post/:postId" element={<PostDetail />}></Route>
							<Route path="*" element={<Home />} />
						</Routes>
					</Suspense>
				</Layout>
			)}
		</>
	);
};

export default App;
