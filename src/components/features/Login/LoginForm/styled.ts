import styled from 'styled-components';

export const LoginFormContainer = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 10px 60px;
	overflow-y: scroll;
	margin-top: 4%;

	& > ul {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	& > button {
		width: 100%;
		border: 1px solid #dddddd;
		background-color: white;
		padding: 3% 4%;
		border-radius: 4px;
		color: #888888;
		margin-top: 12%;
	}
`;

export const LoginFormInput = styled.li`
	width: 100%;
	margin: 10px 0;

	& > input {
		width: 100%;
		border: 1px solid #dddddd;
		border-radius: 4px;
		padding: 10px;
	}

	& > p {
		font-size: 0.7rem;
		color: #aaaaaa;
		margin: 0;
		padding: 4px;
	}
`;
