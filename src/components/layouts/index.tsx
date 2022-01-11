import React, { ReactNode, useCallback, useState } from 'react';
import LoginModal from '@components/features/login/login-modal';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userState } from '@stores/user';
import AuthService from '@services/auth/auth-service';
import { Link } from 'react-router-dom';
import { LayoutAlertModal, LayoutLeftMenu, LayoutNavigation, LayoutUserState, LayoutWrapper } from './styled';
import useErrorMessage from '@hooks/useErrorMessage';
import useSuccessMessage from '@hooks/useSuccessMessage';
import { errorStatusState, successStatusState } from '@stores/status';

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

	const errorMessage = useErrorMessage();
	const successsMessage = useSuccessMessage();

	const setErrorStatus = useSetRecoilState(errorStatusState);
	const setSuccessStatus = useSetRecoilState(successStatusState);

	const logout = async () => {
		try {
			const result = await authService.logout();

			if (result.statusCode === 200) {
				setUser((prev) => {
					return {
						...prev,
						isLogin: false,
						id: '',
					};
				});

				setSuccessStatus({ successMessage: result.message });
			}
		} catch (error) {
			setErrorStatus({
				errorMessage: '잠시 후 다시 시도해주세요.',
			});
		}
	};

	return (
		<>
			<LayoutWrapper aria-hidden={isModalVisible}>
				{errorMessage !== '' && (
					<LayoutAlertModal role="alert">
						<p>{errorMessage}</p>
					</LayoutAlertModal>
				)}

				{successsMessage !== '' && (
					<LayoutAlertModal role="status">
						<p>{successsMessage}</p>
					</LayoutAlertModal>
				)}

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
