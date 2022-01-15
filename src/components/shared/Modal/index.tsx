import React, { ReactNode, useCallback } from 'react';
import { ModalCard, ModalContainer } from './styled';

type Props = {
	children: ReactNode;
	onCloseModal: () => void;
};

const Modal = ({ children, onCloseModal }: Props) => {
	const stopPropagation = useCallback((e) => {
		e.stopPropagation();
	}, []);

	return (
		<ModalContainer onClick={onCloseModal}>
			<ModalCard aria-modal="true" aria-labelledby="modal_label" onClick={stopPropagation}>
				{children}
			</ModalCard>
		</ModalContainer>
	);
};

export default Modal;
