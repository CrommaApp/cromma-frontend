import { BasicResult } from '@services/api';

type UserInfo = {
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
	data: UserInfo;
};

export type getMyInfoResult = BasicResult & {
	data: UserInfo | null;
};
