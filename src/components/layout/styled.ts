import styled from 'styled-components';

type StyledProps = {
	isMenuVisible: boolean;
};

export const LayoutWrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;

	& > main {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: var(--font-color-dark-gray);

		@media screen and (max-width: 768px) {
			width: 100%;
		}
	}
`;

export const LayoutAlertModal = styled.div`
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
	z-index: 20;
	padding: 0.5% 1.8%;
	border: 1px solid #888888;
	color: var(--font-color-dark-gray);
	border-radius: 50px;
	background-color: white;
	font-size: 0.8rem;

	@media screen and (max-width: 1200px) {
		padding: 8px 24px;
		font-size: 0.7rem;
	}
`;

export const LayoutToggleMenuButton = styled.button`
	display: none;
	color: var(--font-color-dark-gray);
	position: absolute;
	width: 40px;
	height: 40px;
	right: 2%;
	top: 2%;
	z-index: 12;
	font-size: 0.5rem;
	border-radius: 50%;
	background-color: white;
	box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 0.3);

	@media screen and (max-width: 768px) {
		display: block;
	}
`;
