import React from 'react';
import Modal from '@components/shared/Modal';
import LoginForm from '../LoginForm';

type Props = {
	closeLoginModal: () => void;
};

const LoginModal = ({ closeLoginModal }: Props) => {
	return (
		<Modal onCloseModal={closeLoginModal}>
			<h1 id="modal_label">로그인</h1>
			<LoginForm closeLoginModal={closeLoginModal} />
		</Modal>
	);
};

export default LoginModal;
