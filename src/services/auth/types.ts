import { BasicResult } from '@services/api';
import { Post } from '@services/post/types';

type userInfo = {
	createdAt: string;
	id: number;
	updatedAt: string;
	userId: string;
};

export type SignRequest = {
	userId: string;
	password: string;
};
export type LoginResult = BasicResult & {
	data: userInfo;
};

export type getMyInfoResult = BasicResult & {
	data: userInfo | null;
};
