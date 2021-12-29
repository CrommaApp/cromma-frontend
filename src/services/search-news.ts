import axios, { AxiosInstance } from 'axios';
import { News, NewsData } from 'src/types/result/types';

class SearchNewsService {
	private keyword: string;
	private limit: number;
	private curPage: number;
	private totalPage: number;

	private newsList: News[];

	private base: AxiosInstance;

	constructor() {
		this.keyword = '';
		this.limit = 5;
		this.curPage = 1;
		this.totalPage = 1;
		this.newsList = [];

		this.base = axios.create({
			baseURL: 'http://apis.data.go.kr/1262000/CountryCovid19SafetyServiceNew',
		});
	}

	getKeyword() {
		return this.keyword;
	}

	getLimit() {
		return this.limit;
	}

	getCurPage() {
		return this.curPage;
	}

	getTotalPage() {
		return this.totalPage;
	}

	getNewsList() {
		return this.newsList;
	}

	setKeyword(keyword: string, update: React.Dispatch<React.SetStateAction<string>>) {
		this.keyword = keyword;

		update(keyword);
	}

	setCurPage(nextPage: number, update: React.Dispatch<React.SetStateAction<number>>) {
		this.curPage = nextPage;

		update(nextPage);
	}

	setTotalPage(totalPage: number, update: React.Dispatch<React.SetStateAction<number>>) {
		this.totalPage = totalPage;

		update(totalPage);
	}

	setNewsList(newsList: News[], update: React.Dispatch<React.SetStateAction<News[]>>) {
		this.newsList = newsList;

		update(newsList);
	}

	async getSearchResultData() {
		const response = await this.base.get(
			`/getCountrySafetyNewsListNew?serviceKey=${process.env.REACT_APP_NEWS_KEY}&numOfRows=${this.limit}&pageNo=${this.curPage}&title1=${this.keyword}`,
		);

		const result: NewsData = await response.data;

		const totalPage = Math.ceil(result.totalCount / result.numOfRows);

		const news: News[] = result.data.map((item) => {
			return {
				sfty_notice_id: item.sfty_notice_id,
				title: item.title,
				wrt_dt: item.wrt_dt,
				txt_origin_cn: item.txt_origin_cn,
			};
		});

		return {
			totalPage,
			news,
		};
	}
}

export default SearchNewsService;
