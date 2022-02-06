import React from 'react';
import Modal from '@components/shared/Modal';
import LoginForm from '../LoginForm';
import styled from 'styled-components';

const CloseLoginModalButton = styled.button`
	background-color: transparent;
	font-size: 0.8rem;
	color: #aaaaaa;
	position: absolute;
	top: 2%;
	right: 2%;
`;

type Props = {
	closeLoginModal: () => void;
};

const LoginModal = ({ closeLoginModal }: Props) => {
	const preventTabMove = (e: React.KeyboardEvent<HTMLButtonElement>) => {
		if (!e.shiftKey && e.key === 'Tab') {
			e.preventDefault();
		}
	};
	return (
		<Modal onCloseModal={closeLoginModal}>
			<h1>Cromma</h1>
			<h2 id="modal_label" className="a11y-hidden">
				로그인
			</h2>
			<LoginForm closeLoginModal={closeLoginModal} />
			<CloseLoginModalButton type="button" onClick={closeLoginModal} onKeyDown={preventTabMove}>
				닫기
			</CloseLoginModalButton>
		</Modal>
	);
};

export default LoginModal;
