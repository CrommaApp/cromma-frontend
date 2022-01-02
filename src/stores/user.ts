import { atom } from 'recoil';

export const userState = atom<{
	isLogin: boolean;
	id: string;
	keywords: string[];
}>({
	key: 'userState',
	default: {
		isLogin: false,
		id: '',
		keywords: [],
	},
});
