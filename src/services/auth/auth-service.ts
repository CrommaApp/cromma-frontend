import axios, { AxiosInstance } from 'axios';
import API_URL, { API_HOST, BasicResult } from '@services/api';
import { getMyInfoResult, LoginResult, SignRequest } from './types';

class AuthService {
	private base: AxiosInstance;
	private userUrl;

	constructor() {
		this.base = axios.create({
			baseURL: API_HOST,
			withCredentials: true,
		});
		this.userUrl = API_URL.user;
	}

	async signup(data: SignRequest) {
		const { signup } = this.userUrl;

		const response = await this.base.post(signup, data);
		const result: BasicResult = await response.data;

		return result;
	}

	async login(data: SignRequest) {
		const { login } = this.userUrl;

		const response = await this.base.post(login, data);
		const result: LoginResult = await response.data;

		return result;
	}

	async logout() {
		const { logout } = this.userUrl;

		const response = await this.base.post(logout);
		const result: BasicResult = await response.data;

		return result;
	}

	async getMyInfo() {
		const { user } = this.userUrl;

		const response = await this.base.get(user);
		const result: getMyInfoResult = await response.data;

		return result;
	}
}

export default AuthService;
