import React from 'react';
import { useSetRecoilState } from 'recoil';
import PostService from '@services/post/post-service';
import { useNavigate } from 'react-router-dom';
import { errorStatusState, successStatusState } from '@stores/status';

const postService = new PostService();

const useDeletePost = (postId: number) => {
	const navigate = useNavigate();

	const setErrorStatus = useSetRecoilState(errorStatusState);
	const setSuccessStatus = useSetRecoilState(successStatusState);

	const deletePost = async () => {
		try {
			const { statusCode, message } = await postService.deletePost(postId);

			if (statusCode === 200) {
				setSuccessStatus({ successMessage: message });
				navigate(`/`, { replace: true });
			}
		} catch (error) {
			setErrorStatus({
				errorMessage: '잠시 후 다시 시도해주세요.',
			});
		}
	};

	return deletePost;
};

export default useDeletePost;
