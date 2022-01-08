import { BasicResult } from '@services/api';

export type Post = {
	id: number;
	title: string;
	content: string;
	createdAt: string;
	updatedAt: string;
	User: { userId: string };
	UserId: number;
};

export type PostWithoutUser = Omit<Post, 'User'>;

export type GetAllPostsResult = BasicResult & {
	data: Post[] & { UserId: string };
};

export type UploadPostRequest = {
	title: string;
	content: string;
};

export type UploadPostResult = BasicResult & {
	data: PostWithoutUser;
};

export type getPostRequest = {
	postId: string;
};

export type deletePostRequest = {
	postId: string;
};

export type getPostResult = BasicResult & {
	data: Post | null;
};
