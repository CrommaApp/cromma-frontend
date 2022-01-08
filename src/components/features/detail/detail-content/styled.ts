import styled from 'styled-components';

export const PostDetailContentWrapper = styled.article`
	width: 100%;
	height: 100%;
	padding: 0 20%;
	position: relative;

	& > h2 {
		font-size: 1.8rem;
		margin: 0 0 1% 0;

		@media screen and (max-width: 768px) {
			font-size: 1.5rem;
		}
	}

	& > time {
		font-size: 0.9rem;
		color: #aaaaaa;
	}

	& > p {
		&:last-child {
			font-size: 1.1rem;
			overflow-wrap: break-word;
		}
	}

	& > button {
		position: absolute;
		background-color: transparent;
		font-size: 0.8rem;
		color: #aaaaaa;
		top: 0;
		right: 0;
	}
`;
