import React, { useEffect, useMemo, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import PostService from '@services/post/post-service';
import { Post } from '@services/post/types';
import { useNavigate, useParams } from 'react-router-dom';
import { errorStatusState } from '@stores/status';
import { BASIC_ERROR_MESSAGE, RESPONSE_STATUS_200, RESPONSE_STATUS_404 } from '@constants/api';
import { useRecoilValue } from 'recoil';
import { userState } from '@stores/user';

type Params = {
	postId: string;
};

const postService = new PostService();

type ReturnType = [Post, boolean];

const useGetPost = (): ReturnType => {
	const params = useParams<Params>();

	const [post, setPost] = useState<Post>({
		id: 1,
		title: '',
		content: '',
		createdAt: '',
		updatedAt: '',
		UserId: 0,
		User: {
			userId: '',
		},
	});

	const [postId, setPostId] = useState(params?.postId || '');

	useEffect(() => {
		if (params.postId) {
			setPostId(params.postId);
		}
	}, [params]);

	const navigate = useNavigate();

	const setErrorStatus = useSetRecoilState(errorStatusState);

	const getPost = async () => {
		try {
			const { data, statusCode } = await postService.getPost(postId);

			if (statusCode === RESPONSE_STATUS_200 && data) {
				const curPost = {
					...data,
					createdAt: data.createdAt.slice(0, 10),
				};
				setPost(curPost);
			}
		} catch (error: any) {
			if (error.response.data.statusCode === RESPONSE_STATUS_404) {
				setErrorStatus({
					errorMessage: error.response.data.message,
				});
				navigate('/', { replace: true });
			} else {
				setErrorStatus({
					errorMessage: BASIC_ERROR_MESSAGE,
				});
			}
		}
	};

	useEffect(() => {
		getPost();
	}, []);

	const user = useRecoilValue(userState);

	const isMyPost = useMemo(() => user.id === post.User.userId, [user, post]);

	return [post, isMyPost];
};

export default useGetPost;
