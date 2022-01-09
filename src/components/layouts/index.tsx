import React, { ReactNode, useCallback, useState } from 'react';
import LoginModal from '@components/features/login/login-modal';
import { useRecoilState } from 'recoil';
import { userState } from '@stores/user';
import AuthService from '@services/auth/auth-service';
import { Link } from 'react-router-dom';
import { LayoutLeftMenu, LayoutNavigation, LayoutUserState, LayoutWrapper } from './styled';

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
			};
		});
	};

	return (
		<>
			<LayoutWrapper aria-hidden={isModalVisible}>
				<LayoutLeftMenu>
					<div>
						<LayoutUserState>{user.isLogin ? user.id : '로그인 해주세요'}</LayoutUserState>
						<LayoutNavigation>
							<ul>
								<li>
									<Link to="/">홈</Link>
								</li>
								<li>
									<Link to="/post/upload">게시글 작성</Link>
								</li>
							</ul>
						</LayoutNavigation>
					</div>

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
			</LayoutWrapper>
			{isModalVisible && <LoginModal authService={authService} closeLoginModal={closeLoginModal} />}
		</>
	);
};

export default Layout;
