import styled from 'styled-components';

type StyledProps = {
	isMenuVisible: boolean;
};

export const LayoutMenu = styled.div`
	width: 25%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background-color: var(--background-color-gray);
	padding: 5% 0;
	font-size: 1rem;
	color: var(--font-color-gray);

	& > div {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	& > button {
		font-size: 1rem;
		color: var(--font-color-gray);
		background-color: transparent;
	}

	@media screen and (max-width: 768px) {
		width: 260px;
		display: ${({ isMenuVisible }: StyledProps) => (isMenuVisible ? 'block' : 'none')};
		position: absolute;
		left: 0;
		top: 0;
		z-index: 10;
		overflow-y: scroll;
		white-space: nowrap;
		padding: 8% 0;

		& > button {
			display: block;
			margin: auto;
			margin-top: 30%;
		}
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
		color: var(--font-color-gray);
		font-size: 0.9rem;
	}
`;
