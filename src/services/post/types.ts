import { BasicResult } from '@services/api';

export type Post = {
	id: number;
	title: string;
	content: string;
	createdAt: string;
	updatedAt: string;
};

export type GetAllPostsResult = BasicResult & {
	data: Post[] & { UserId: string };
};

export type UploadPostRequest = {
	title: string;
	content: string;
};

export type UploadPostResult = BasicResult & {
	data: Post;
};

export type getPostRequest = {
	postId: string;
};

export type deletePostRequest = {
	postId: string;
};
