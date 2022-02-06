import styled from 'styled-components';

export const PostDetailContentWrapper = styled.article`
	width: 100%;
	height: 100%;
	padding: 5% 12%;
	position: relative;
	background-color: white;

	& > h2 {
		font-size: 1.8rem;
		margin: 0 0 1% 0;

		@media screen and (max-width: 768px) {
			font-size: 1.5rem;
		}
	}

	& > time {
		font-size: 0.8rem;
		color: #aaaaaa;
	}

	& > p {
		margin: 3% 0;
		font-size: 0.9rem;
	}

	& > button {
		position: absolute;
		background-color: transparent;
		font-size: 0.8rem;
		color: #aaaaaa;
		top: 1%;
		right: 1%;
	}
`;
