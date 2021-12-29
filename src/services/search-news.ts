class SearchNewsService {
	private keyword: string;

	constructor() {
		this.keyword = '';
	}

	getKeyword() {
		return this.keyword;
	}

	setKeyword(newKeyword: string) {
		this.keyword = newKeyword;
	}
}

export default SearchNewsService;
