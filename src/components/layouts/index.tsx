import React, { ReactNode, useCallback, useState } from 'react';
import LoginModal from '@components/features/login/login-modal';
import { LayoutAlertModal, LayoutWrapper } from './styled';
import useErrorMessage from '@hooks/useErrorMessage';
import useSuccessMessage from '@hooks/useSuccessMessage';
import LayoutLeftMenu from '@components/layouts/left-menu';

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

				<LayoutLeftMenu showLoginModal={showLoginModal} />

				<main>{children}</main>
			</LayoutWrapper>
			{isModalVisible && <LoginModal closeLoginModal={closeLoginModal} />}
		</>
	);
};

export default Layout;
