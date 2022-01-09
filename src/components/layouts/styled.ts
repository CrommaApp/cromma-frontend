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

export const LayoutLeftMenu = styled.div`
	width: 25%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background-color: #dddddd;
	padding: 5% 0;
	font-size: 1rem;
	color: #aaaaaa;

	& > div {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	& > button {
		font-size: 1rem;
		color: #aaaaaa;
		background-color: transparent;
	}

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const LayoutUserState = styled.p`
	width: 100%;
	background-color: white;
	margin: 0;
	padding: 12% 0;
	text-align: center;
`;

export const LayoutNavigation = styled.nav`
	padding-top: 10%;

	& li {
		margin: 20% 0;
	}

	& a {
		color: #aaaaaa;
		font-size: 0.9rem;
	}
`;
