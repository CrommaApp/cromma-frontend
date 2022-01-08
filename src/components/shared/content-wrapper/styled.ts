import styled from 'styled-components';

export const ContentWrapper = styled.section`
	width: 65%;
	height: 60%;
	margin-top: 5%;
	padding: 2%;
	background-color: white;
	border: 1px solid #dddddd;
	border-radius: 8px;
	overflow-y: scroll;

	@media screen and (max-width: 480px) {
		width: 80%;
		height: 70%;
	}
`;
