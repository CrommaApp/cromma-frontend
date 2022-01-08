import React from 'react';
import PostService from '@services/post/post-service';
import { useHistory } from 'react-router';

const postService = new PostService();

type Props = {
	postId: string;
};

const useDeletePost = ({ postId }: Props) => {
	const history = useHistory();

	const deletePost = async () => {
		try {
			const requestData = {
				postId,
			};

			const { statusCode, message } = await postService.deletePost(requestData);

			if (statusCode === 200) {
				alert(message);
				history.replace(`/`);
			}
		} catch (error) {
			console.error(error);
		}
	};

	return deletePost;
};

export default useDeletePost;
