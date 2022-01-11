import React from 'react';
import { useSetRecoilState } from 'recoil';
import PostService from '@services/post/post-service';
import { useNavigate } from 'react-router-dom';
import { errorStatusState, successStatusState } from '@stores/status';
import { BASIC_ERROR_MESSAGE, RESPONSE_STATUS_200 } from '@constants/api';

const postService = new PostService();

const useDeletePost = (postId: number) => {
	const navigate = useNavigate();

	const setErrorStatus = useSetRecoilState(errorStatusState);
	const setSuccessStatus = useSetRecoilState(successStatusState);

	const deletePost = async () => {
		try {
			const { statusCode, message } = await postService.deletePost(postId);

			if (statusCode === RESPONSE_STATUS_200) {
				setSuccessStatus({ successMessage: message });
				navigate(`/`, { replace: true });
			}
		} catch (error) {
			setErrorStatus({
				errorMessage: BASIC_ERROR_MESSAGE,
			});
		}
	};

	return deletePost;
};

export default useDeletePost;
