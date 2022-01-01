import React from 'react';
import Modal from '@components/shared/modal';
import LoginForm from '../login-form';

type Props = {
	closeLoginModal: () => void;
};

const LoginModal = ({ closeLoginModal }: Props) => {
	return (
		<Modal onCloseModal={closeLoginModal}>
			<h1 id="modal_label">Login</h1>
			<LoginForm closeLoginModal={closeLoginModal} />
		</Modal>
	);
};

export default LoginModal;
