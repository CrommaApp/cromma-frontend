import React from 'react';
import PostService from '@services/post/post-service';
import { useHistory } from 'react-router';

const postService = new PostService();

const useDeletePost = (postId: number) => {
	const history = useHistory();

	const deletePost = async () => {
		try {
			const { statusCode, message } = await postService.deletePost(postId);

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
