import React, { useEffect, useMemo, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import PostService from '@services/post/post-service';
import { Post } from '@services/post/types';
import { errorStatusState } from '@stores/status';

type ReturnTypes = [Post[], boolean, boolean, () => Promise<void>];

const postService = new PostService();

const useGetAllPosts = (): ReturnTypes => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [allPosts, setAllPosts] = useState<Post[]>([]);

	const isEmpty = useMemo(() => posts?.length === 0, [posts]);
	const isReachingEnd = useMemo(() => isEmpty || (posts && posts?.length < 10) || false, [isEmpty, posts]);

	const [isLoading, setIsLoading] = useState(false);

	const setErrorStatus = useSetRecoilState(errorStatusState);

	const getPosts = async (lastId: number) => {
		setIsLoading(true);
		try {
			const { data, statusCode } = await postService.getAllPosts(lastId);

			if (statusCode === 200 && data) {
				const newPosts = data.map((post) => {
					return {
						...post,
						createdAt: post.createdAt.slice(0, 10),
					};
				});
				setPosts(newPosts);

				return newPosts;
			}
		} catch (error: any) {
			setErrorStatus({
				errorMessage: '게시글을 불러오는데 실패했습니다.',
			});
		} finally {
			setIsLoading(false);
		}
	};

	const addToAllPosts = async () => {
		const newPosts = await getPosts(posts.pop()?.id || 0);

		if (newPosts) {
			setAllPosts((prev) => [...prev, ...newPosts]);
		}
	};

	const onClickMorePostsButton = async () => {
		if (isReachingEnd) return;

		addToAllPosts();
	};

	useEffect(() => {
		addToAllPosts();
	}, []);

	return [allPosts, isReachingEnd, isLoading, onClickMorePostsButton];
};

export default useGetAllPosts;
