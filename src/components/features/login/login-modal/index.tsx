import React from 'react';
import Modal from '@components/shared/modal';
import styled from 'styled-components';
const KaKaoLogin = require('@assets/images/kakao_login_button.png');

const KakaoLoginButton = styled.button`
	background-color: transparent;
`;

type Props = {
	closeLoginModal: () => void;
};

const LoginModal = ({ closeLoginModal }: Props) => {
	return (
		<Modal onCloseModal={closeLoginModal}>
			<h1 id="modal_label">Login</h1>
			<KakaoLoginButton type="button">
				<img src={KaKaoLogin.default} alt="kakao login button" />
			</KakaoLoginButton>
		</Modal>
	);
};

export default LoginModal;
