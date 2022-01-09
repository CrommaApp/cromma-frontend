export type BasicResult = {
	statusCode: number;
	status: string;
	message: string;
};

export const API_HOST = 'http://localhost:3065';

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
