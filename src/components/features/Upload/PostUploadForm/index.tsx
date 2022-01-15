import React from 'react';
import useInput from '@hooks/useInput';
import useUploadPost from '@hooks/useUploadPost';
import { UploadForm, UploadFormInput, UploadSubmitButton } from './styled';

const PostUploadForm = () => {
	const [title, onChangeTitle] = useInput('');
	const [content, onChangeContent] = useInput('');

	const uploadPost = useUploadPost({ title, content });

	const sumbitUploadForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!title || !content) return;

		uploadPost();
	};

	return (
		<UploadForm onSubmit={sumbitUploadForm}>
			<ul>
				<UploadFormInput>
					<label htmlFor="post_title_input">제목</label>
					<input id="post_title_input" type="text" value={title} onChange={onChangeTitle} aria-required="true" />
				</UploadFormInput>
				<UploadFormInput>
					<label htmlFor="post_content_input">내용</label>
					<textarea id="post_content_input" onChange={onChangeContent} aria-required="true" />
				</UploadFormInput>
			</ul>

			<UploadSubmitButton type="submit">작성</UploadSubmitButton>
		</UploadForm>
	);
};

export default PostUploadForm;
