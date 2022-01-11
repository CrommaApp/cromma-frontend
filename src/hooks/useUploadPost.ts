import React from 'react';
import { useSetRecoilState } from 'recoil';
import PostService from '@services/post/post-service';
import { useNavigate } from 'react-router-dom';
import { errorStatusState, successStatusState } from '@stores/status';
import { BASIC_ERROR_MESSAGE, RESPONSE_STATUS_201 } from '@constants/api';

const postService = new PostService();

type UploadPostInputs = {
	title: string;
	content: string;
};

const useUploadPost = ({ title, content }: UploadPostInputs) => {
	const navigate = useNavigate();

	const setErrorStatus = useSetRecoilState(errorStatusState);
	const setSuccessStatus = useSetRecoilState(successStatusState);

	const uploadPost = async () => {
		try {
			const requestData = {
				title,
				content,
			};

			const { data, statusCode, message } = await postService.uploadPost(requestData);

			if (statusCode === RESPONSE_STATUS_201) {
				setSuccessStatus({ successMessage: message });
				navigate(`/post/${data.id}`);
			}
		} catch (error) {
			setErrorStatus({
				errorMessage: BASIC_ERROR_MESSAGE,
			});
		}
	};

	return uploadPost;
};

export default useUploadPost;
