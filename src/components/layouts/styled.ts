import styled from 'styled-components';

export const LayoutWrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;

	& > main {
		position: relative;
		width: 75%;
		height: 100%;
		background-color: #eeeeee;
		padding: 8% 2% 0 2%;
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
	padding: 1% 1.8%;
	border: 0.5px solid #888888;
	color: #888888;
	border-radius: 16px;
	background-color: white;
	font-size: 0.9rem;
	@media screen and (max-width: 1200px) {
		padding: 12px 20px;
	}
`;
