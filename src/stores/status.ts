import { atom } from 'recoil';

export const errorStatusState = atom<{
	errorMessage: string;
}>({
	key: 'errorStatusState',
	default: {
		errorMessage: '',
	},
});

export const successStatusState = atom<{
	successMessage: string;
}>({
	key: 'successStatusState',
	default: {
		successMessage: '',
	},
});
