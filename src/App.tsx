import React, { lazy, Suspense } from 'react';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Layout from '@components/layouts';
import useCheckUser from '@hooks/useCheckUser';

const Home = lazy(() => import(/* webpackChunkName: "Home" */ '@pages/home'));
const PostUpload = lazy(() => import(/* webpackChunkName: "PostUpload" */ '@pages/post/upload'));
const PostDetail = lazy(() => import(/* webpackChunkName: "PostDetail" */ '@pages/post/detail'));

const App = () => {
	const isUserChecked = useCheckUser();

	return (
		<>
			{isUserChecked && (
				<Layout>
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
