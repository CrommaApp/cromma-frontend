import styled from 'styled-components';

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
		color: #888888;

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
	color: #888888;
	border-radius: 50px;
	background-color: white;
	font-size: 0.8rem;
	@media screen and (max-width: 1200px) {
		padding: 8px 24px;
		font-size: 0.7rem;
	}
`;
