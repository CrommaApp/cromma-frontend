import { atom } from 'recoil';

export const userState = atom<{
	isLogin: boolean;
	id: string;
}>({
	key: 'userState',
	default: {
		isLogin: false,
		id: '',
	},
});
