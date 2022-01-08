import {
	GetAllPostsResult,
	UploadPostRequest,
	UploadPostResult,
	getPostRequest,
	deletePostRequest,
	getPostResult,
} from './types';
import axios, { AxiosInstance } from 'axios';
import API_URL, { API_HOST, BasicResult } from '@services/api';

class PostService {
	private base: AxiosInstance;
	private postUrl;

	constructor() {
		this.base = axios.create({
			baseURL: API_HOST,
			withCredentials: true,
		});
		this.postUrl = API_URL.post;
	}

	async getAllPosts() {
		const { posts } = this.postUrl;

		const response = await this.base.get(posts);
		const result: GetAllPostsResult = await response.data;

		return result;
	}

	async getPost({ postId }: getPostRequest) {
		const { post } = this.postUrl;

		const response = await this.base.get(`${post}/${postId}`);
		const result: getPostResult = await response.data;

		return result;
	}

	async uploadPost(data: UploadPostRequest) {
		const { post } = this.postUrl;

		const response = await this.base.post(post, data);
		const result: UploadPostResult = await response.data;

		return result;
	}

	async deletePost({ postId }: deletePostRequest) {
		const { post } = this.postUrl;

		const response = await this.base.delete(`${post}/${postId}`);
		const result: BasicResult = await response.data;

		return result;
	}
}

export default PostService;
