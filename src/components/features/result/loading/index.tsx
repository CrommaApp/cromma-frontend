import React from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
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
	return (
		<LoadingContainer>
			<h2>loading...</h2>
		</LoadingContainer>
	);
};

export default Loading;
