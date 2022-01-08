import styled from 'styled-components';

export const PageButtons = styled.div`
	width: 100%;
	padding: 3% 12%;
	position: absolute;
	bottom: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	background-color: white;

	& > button {
		width: 20%;
		padding: 3% 0;
		font-size: 1.5rem;
		font-family: var(--font-sans-bold);
		border-radius: 100px;
		border: 1px solid #dddddd;

		&:first-child {
			background-color: white;
			color: #888888;
		}
		&:last-child {
			background-color: #dddddd;
			color: white;
		}

		@media screen and (max-width: 480px) {
			font-size: 1.2rem;
			width: 32%;
		}
	}

	& > p {
		margin: 0;
		font-size: 1.2rem;

		@media screen and (max-width: 480px) {
			font-size: 1rem;
		}
	}
`;
