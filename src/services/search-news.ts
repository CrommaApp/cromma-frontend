class SearchNewsService {
	private keyword: string;

	constructor() {
		this.keyword = '';
	}

	getKeyword() {
		return this.keyword;
	}

	setKeyword(newKeyword: string, update: React.Dispatch<React.SetStateAction<string>>) {
		this.keyword = newKeyword;

		update(newKeyword);
	}
}

export default SearchNewsService;
