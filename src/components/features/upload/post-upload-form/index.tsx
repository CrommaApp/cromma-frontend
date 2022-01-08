import React from 'react';
import { UploadForm, UploadFormInput, UploadSubmitButton } from './styled';

const PostUploadForm = () => {
	const onSumbitUploadForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<UploadForm onSubmit={onSumbitUploadForm}>
			<ul>
				<UploadFormInput>
					<label htmlFor="post_title_input">제목</label>
					<input id="post_title_input" type="text" aria-required="true" />
				</UploadFormInput>
				<UploadFormInput>
					<label htmlFor="post_content_input">내용</label>
					<textarea id="post_content_input" aria-required="true" />
				</UploadFormInput>
			</ul>

			<UploadSubmitButton type="submit">작성</UploadSubmitButton>
		</UploadForm>
	);
};

export default PostUploadForm;
