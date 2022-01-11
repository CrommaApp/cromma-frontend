import React from 'react';
import PostService from '@services/post/post-service';
import { useNavigate } from 'react-router-dom';

const postService = new PostService();

const useDeletePost = (postId: number) => {
	const navigate = useNavigate();

	const deletePost = async () => {
		try {
			const { statusCode, message } = await postService.deletePost(postId);

			if (statusCode === 200) {
				alert(message);
				navigate(`/`, { replace: true });
			}
		} catch (error) {
			console.error(error);
		}
	};

	return deletePost;
};

export default useDeletePost;
