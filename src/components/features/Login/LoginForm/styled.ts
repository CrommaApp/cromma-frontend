import styled from 'styled-components';

export const LoginFormContainer = styled.form`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
	overflow-y: scroll;

	& > ul {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	& > button {
		border: 1px solid #dddddd;
		outline: none;
		background-color: transparent;
		padding: 2% 4%;
		border-radius: 4px;
		color: #888888;

		&:focus {
			border: 1px solid #aaaaaa;
		}
	}
`;

export const LoginFormInput = styled.li`
	width: 50%;
	margin: 10px 0;

	& > input {
		width: 100%;
		border: 1px solid #dddddd;
		border-radius: 4px;
		padding: 8px;
		outline: none;

		&:focus {
			border: 1px solid #aaaaaa;
		}
	}

	& > p {
		font-size: 0.7rem;
		color: #aaaaaa;
		margin: 0;
		padding: 4px;
	}
`;
