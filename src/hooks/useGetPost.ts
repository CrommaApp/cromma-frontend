import React, { useEffect, useState } from 'react';
import PostService from '@services/post/post-service';
import { Post } from '@services/post/types';
import { useHistory, useParams } from 'react-router';

type Params = {
	postId: string;
};

type ReturnTypes = [Post, () => Promise<void>];

const postService = new PostService();

const useGetPost = (): ReturnTypes => {
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
		if (params) {
			setPostId(params.postId);
		}
	}, [params]);

	const history = useHistory();

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
				history.replace('/');
			}
		}
	};

	return [post, getPost];
};

export default useGetPost;
