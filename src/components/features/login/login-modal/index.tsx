import React from 'react';
import Modal from '@components/shared/modal';
import styled from 'styled-components';
import LoginForm from '../login-form';

type Props = {
	closeLoginModal: () => void;
};

const LoginModal = ({ closeLoginModal }: Props) => {
	return (
		<Modal onCloseModal={closeLoginModal}>
			<h1 id="modal_label">Login</h1>
			<LoginForm />
		</Modal>
	);
};

export default LoginModal;
