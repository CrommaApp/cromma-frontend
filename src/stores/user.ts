import { atom } from 'recoil';
import { Keyword } from 'src/types/home/types';

export const userState = atom<{
	isLogin: boolean;
	id: string;
	recentKeywords: Keyword[];
}>({
	key: 'userState',
	default: {
		isLogin: false,
		id: '',
		recentKeywords: [],
	},
});
