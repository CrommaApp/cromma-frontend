import LoginModal from '@components/features/login/login-modal';
import React, { ReactNode, useCallback, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { userState } from '@stores/user';
import AuthService from '@services/auth/auth-service';

const LayoutContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;

	& > main {
		position: relative;
		width: 75%;
		height: 100%;
		background-color: #eeeeee;

		@media screen and (max-width: 768px) {
			width: 100%;
		}
	}
`;

const LayoutLeftMenu = styled.div`
	width: 25%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background-color: #dddddd;
	padding: 5% 0;
	font-size: 1rem;
	color: #aaaaaa;

	& > p {
		width: 100%;
		background-color: white;
		margin: 0;
		padding: 12% 0;
		text-align: center;
	}

	& > button {
		font-size: 1rem;
		color: #aaaaaa;
		background-color: transparent;
	}

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

type Props = {
	authService: AuthService;
	children: ReactNode;
};

const Layout = ({ authService, children }: Props) => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showLoginModal = useCallback(() => {
		setIsModalVisible(true);
	}, []);

	const closeLoginModal = useCallback(() => {
		setIsModalVisible(false);
	}, []);

	const [user, setUser] = useRecoilState(userState);

	const logout = async () => {
		const result = await authService.logout();

		setUser((prev) => {
			return {
				...prev,
				isLogin: false,
				id: '',
				recentKeywords: [],
			};
		});
	};

	return (
		<>
			<LayoutContainer aria-hidden={isModalVisible}>
				<LayoutLeftMenu>
					<p>{user.isLogin ? user.id : '로그인 해주세요'}</p>
					{user.isLogin ? (
						<button type="button" onClick={logout}>
							로그아웃
						</button>
					) : (
						<button type="button" onClick={showLoginModal}>
							회원가입/로그인
						</button>
					)}
				</LayoutLeftMenu>
				<main>{children}</main>
			</LayoutContainer>
			{isModalVisible && <LoginModal authService={authService} closeLoginModal={closeLoginModal} />}
		</>
	);
};

export default Layout;
