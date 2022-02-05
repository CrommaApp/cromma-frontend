import React, { ReactNode, useCallback, useState } from 'react';
import LoginModal from '@components/features/Login/LoginModal';
import { LayoutAlertModal, LayoutToggleMenuButton, LayoutWrapper } from './styled';
import useErrorMessage from '@hooks/useErrorMessage';
import useSuccessMessage from '@hooks/useSuccessMessage';
import LayoutLeftMenu from '@components/layout/LeftMenu';

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

	const [isMenuVisible, setIsMenuVisible] = useState(false);

	const toggleLeftMenu = useCallback(() => {
		setIsMenuVisible((prev) => !prev);
	}, []);

	const errorMessage = useErrorMessage();
	const successsMessage = useSuccessMessage();

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

				<LayoutToggleMenuButton onClick={toggleLeftMenu}>
					{isMenuVisible ? '메뉴 닫기' : '메뉴 열기'}
				</LayoutToggleMenuButton>

				<LayoutLeftMenu isMenuVisible={isMenuVisible} showLoginModal={showLoginModal} />

				<main>{children}</main>
			</LayoutWrapper>
			{isModalVisible && <LoginModal closeLoginModal={closeLoginModal} />}
		</>
	);
};

export default Layout;
