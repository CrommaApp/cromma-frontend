import React, { useState } from 'react';
import PostService from '@services/post/post-service';
import { Post } from '@services/post/types';

type ReturnTypes = [Post[], () => Promise<void>];

const postService = new PostService();

const useGetAllPosts = (lastId: number): ReturnTypes => {
	const [posts, setPosts] = useState<Post[]>([]);

	const getAllPosts = async () => {
		try {
			const { data, statusCode } = await postService.getAllPosts(lastId);

			if (statusCode === 200 && data) {
				const curPosts = data.map((post) => {
					return {
						...post,
						createdAt: post.createdAt.slice(0, 10),
					};
				});
				setPosts(curPosts);
			}
		} catch (error: any) {
			console.error(error);
		}
	};

	return [posts, getAllPosts];
};

export default useGetAllPosts;
