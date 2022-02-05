import React from 'react';
import Modal from '@components/shared/Modal';
import LoginForm from '../LoginForm';

type Props = {
	closeLoginModal: () => void;
};

const LoginModal = ({ closeLoginModal }: Props) => {
	return (
		<Modal onCloseModal={closeLoginModal}>
			<h1>Cromma</h1>
			<h2 id="modal_label" className="a11y-hidden">
				로그인
			</h2>
			<LoginForm closeLoginModal={closeLoginModal} />
		</Modal>
	);
};

export default LoginModal;
