import styled from 'styled-components';

export const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	z-index: 10;
	background-color: rgba(0, 0, 0, 0.6);
	cursor: pointer;
	overflow: hidden;
`;

export const ModalCard = styled.dialog`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 450px;
	height: 350px;
	background: white;
	border: none;
	border-radius: 12px;
	padding: 80px 0;
	cursor: auto;

	& > h1 {
		font-size: 1.8rem;
		margin: 0;
		color: #888888;
	}

	@media screen and (max-width: 768px) {
		width: 400px;
		height: 300px;
		padding: 70px 0;
	}

	@media screen and (max-width: 480px) {
		width: 320px;
		height: 220px;
		padding: 40px 5px;
	}
`;
