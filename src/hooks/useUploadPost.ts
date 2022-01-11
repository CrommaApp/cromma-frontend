import React from 'react';
import { useSetRecoilState } from 'recoil';
import PostService from '@services/post/post-service';
import { useNavigate } from 'react-router-dom';
import { errorStatusState, successStatusState } from '@stores/status';

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

			if (statusCode === 201) {
				setSuccessStatus({ successMessage: message });
				navigate(`/post/${data.id}`);
			}
		} catch (error) {
			setErrorStatus({
				errorMessage: '잠시 후 다시 시도해주세요.',
			});
		}
	};

	return uploadPost;
};

export default useUploadPost;
