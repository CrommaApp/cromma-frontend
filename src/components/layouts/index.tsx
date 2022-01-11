import React, { ReactNode, useCallback, useState } from 'react';
import LoginModal from '@components/features/login/login-modal';
import { Link } from 'react-router-dom';
import { LayoutAlertModal, LayoutLeftMenu, LayoutNavigation, LayoutUserState, LayoutWrapper } from './styled';
import useErrorMessage from '@hooks/useErrorMessage';
import useSuccessMessage from '@hooks/useSuccessMessage';
import useLogout from '@hooks/useLogout';

type Props = {
	children: ReactNode;
};

const Layout = ({ children }: Props) => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showLoginModal = useCallback(() => {
		setIsModalVisible(true);
	}, []);

	const closeLoginModal = useCallback(() => {
		setIsModalVisible(false);
	}, []);

	const errorMessage = useErrorMessage();
	const successsMessage = useSuccessMessage();

	const [user, onLogout] = useLogout();

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
						<button type="button" onClick={onLogout}>
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
			{isModalVisible && <LoginModal closeLoginModal={closeLoginModal} />}
		</>
	);
};

export default Layout;
