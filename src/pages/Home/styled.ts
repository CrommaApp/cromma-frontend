import styled from 'styled-components';

export const MorePostsButton = styled.button`
	display: block;
	margin: auto;
	width: 25%;
	background-color: white;
	border: 2px solid #dddddd;
	border-radius: 8px;
	color: var(--font-color-dark-gray);
	padding: 2%;

	@media screen and (max-width: 768px) {
		width: 50%;
		padding: 3.5%;
	}
`;
