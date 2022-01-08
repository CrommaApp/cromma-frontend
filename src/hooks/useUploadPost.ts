import React from 'react';
import PostService from '@services/post/post-service';
import { useHistory } from 'react-router';

const postService = new PostService();

type Props = {
	title: string;
	content: string;
};

const useUploadPost = ({ title, content }: Props) => {
	const history = useHistory();

	const uploadPost = async () => {
		try {
			const requestData = {
				title,
				content,
			};

			const { data, statusCode, message } = await postService.uploadPost(requestData);

			if (statusCode === 201) {
				alert(message);
				history.push(`/post/${data.id}`);
			}
		} catch (error) {
			console.error(error);
		}
	};

	return uploadPost;
};

export default useUploadPost;
