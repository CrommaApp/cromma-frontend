import React from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
	width: 65%;
	height: 60%;
	margin-top: 5%;
	padding: 2%;
	background-color: white;
	border: 1px solid #dddddd;
	border-radius: 8px;

	@media screen and (max-width: 480px) {
		width: 80%;
		height: 70%;
	}
`;

const Loading = () => {
	return <LoadingContainer>loading...</LoadingContainer>;
};

export default Loading;
