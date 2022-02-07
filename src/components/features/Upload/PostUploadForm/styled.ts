import styled from 'styled-components';

export const UploadForm = styled.form`
	width: 100%;
	height: 100%;
	overflow-y: scroll;
	padding: 0 20%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

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
		color: var(--font-color-dark-gray);
	}

	& > input {
		border: 1px solid #dddddd;
		padding: 2% 4%;
		border-radius: 4px;
		color: var(--font-color-dark-gray);
	}

	& > textarea {
		height: 200px;
		border: 1px solid #dddddd;
		padding: 3%;
		border-radius: 4px;
		color: var(--font-color-dark-gray);
		resize: none;
	}
`;

export const UploadSubmitButton = styled.button`
	width: 25%;
	background-color: white;
	border: 1px solid #dddddd;
	border-radius: 4px;
	color: var(--font-color-dark-gray);
	padding: 2%;

	@media screen and (max-width: 768px) {
		width: 50%;
		padding: 3.5%;
	}
`;
