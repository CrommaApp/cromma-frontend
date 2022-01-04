import styled from 'styled-components';

export const SearchFormContainer = styled.form`
	display: flex;
	align-items: center;
	width: 40%;
	margin-top: 12%;

	& > input {
		width: 50%;
		padding: 4%;
		border: 1px solid #dddddd;
		margin-right: 2%;
		border-radius: 8px;
		outline: none;

		&:focus {
			border: 2px solid #aaaaaa;
		}
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

	& > p {
		font-size: 0.8rem;
	}

	@media screen and (max-width: 768px) {
		width: 60%;
	}

	@media screen and (max-width: 480px) {
		width: 80%;
	}
`;
