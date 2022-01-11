import { atom } from 'recoil';

export type UserState = {
	isLogin: boolean;
	id: string;
};

export const userState = atom<UserState>({
	key: 'userState',
	default: {
		isLogin: false,
		id: '',
	},
});
