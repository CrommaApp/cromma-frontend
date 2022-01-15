export type BasicResult = {
	statusCode: number;
	status: string;
	message: string;
};

export const API_HOST = process.env.NODE_ENV !== 'production' ? 'http://localhost' : 'http://api.cromma.site';

const API_URL = {
	user: {
		user: '/user',
		signup: '/user/signup',
		login: '/user/login',
		logout: '/user/logout',
	},
	post: {
		post: '/post',
		posts: '/posts',
	},
};

export default API_URL;
