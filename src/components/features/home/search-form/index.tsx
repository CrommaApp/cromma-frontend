import React from 'react';
import styled from 'styled-components';

const SearchFormContainer = styled.form`
	display: flex;
	align-items: center;
	width: 38%;
	margin-top: 12%;

	& > input {
		width: 50%;
		padding: 4%;
		border: 1px solid #dddddd;
		margin-right: 2%;
		border-radius: 8px;
	}

	& > button {
		width: 48%;
		background-color: #aaaaaa;
		color: white;
		border-radius: 100px;
		padding: 3% 0;
		font-size: 1.5rem;

		@media screen and (max-width: 768px) {
			font-size: 1.2rem;
		}
	}

	@media screen and (max-width: 480px) {
		width: 80%;
	}
`;

const SearchForm = () => {
	return (
		<SearchFormContainer>
			<input type="text" />
			<button type="submit">Search</button>
		</SearchFormContainer>
	);
};

export default SearchForm;
