import React, { useEffect, useState } from 'react';
import PostService from '@services/post/post-service';
import { Post } from '@services/post/types';
import { useNavigate, useParams } from 'react-router-dom';

type Params = {
	postId: string;
};

const postService = new PostService();

const useGetPost = () => {
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

	const getPost = async () => {
		try {
			const { data, statusCode } = await postService.getPost(postId);

			if (statusCode === 200 && data) {
				const curPost = {
					...data,
					createdAt: data.createdAt.slice(0, 10),
				};
				setPost(curPost);
			}
		} catch (error: any) {
			if (error.response.data.statusCode === 404) {
				alert(error.response.data.message);
				navigate('/', { replace: true });
			}
		}
	};

	useEffect(() => {
		getPost();
	}, []);

	return post;
};

export default useGetPost;
