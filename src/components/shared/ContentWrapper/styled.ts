import styled from 'styled-components';

export const ContentWrapper = styled.section`
	width: 100%;
	height: 100%;
	padding: 2%;
	background-color: var(--background-color-light-gray);
	overflow-y: scroll;

	@media screen and (max-width: 768px) {
		padding: 8% 2%;
	}
`;
