import styled from 'styled-components';

export const UploadForm = styled.form`
	width: 100%;
	height: 100%;
	overflow-y: scroll;
	padding: 0 20%;
	display: flex;
	flex-direction: column;
	align-items: center;

	& > ul {
		width: 100%;
		display: flex;
		flex-direction: column;
	}
`;

export const UploadFormInput = styled.li`
	display: flex;
	flex-direction: column;
	margin-bottom: 10%;

	& > label {
		color: #888888;
	}

	& > input {
		border: 1px solid #dddddd;
		outline: none;
		padding: 2% 4%;
		border-radius: 4px;
		color: #888888;

		&:focus {
			border: 2px solid #aaaaaa;
		}
	}

	& > textarea {
		height: 200px;
		border: 1px solid #dddddd;
		outline: none;
		padding: 3%;
		border-radius: 4px;
		color: #888888;
		resize: none;

		&:focus {
			border: 2px solid #aaaaaa;
		}
	}
`;

export const UploadSubmitButton = styled.button`
	width: 40%;
	background-color: transparent;
	border: 1px solid #dddddd;
	outline: none;
	border-radius: 4px;
	color: #888888;
	padding: 2%;

	&:focus {
		border: 2px solid #aaaaaa;
	}
`;
