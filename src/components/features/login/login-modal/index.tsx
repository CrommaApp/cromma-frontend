import React from 'react';
import Modal from '@components/shared/modal';
import LoginForm from '../login-form';
import AuthService from '@services/auth/auth-service';

type Props = {
	authService: AuthService;
	closeLoginModal: () => void;
};

const LoginModal = ({ authService, closeLoginModal }: Props) => {
	return (
		<Modal onCloseModal={closeLoginModal}>
			<h1 id="modal_label">Login</h1>
			<LoginForm authService={authService} closeLoginModal={closeLoginModal} />
		</Modal>
	);
};

export default LoginModal;
