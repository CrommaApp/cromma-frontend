import SearchNewsService from '../search-news';

describe('SearchNewsService', () => {
	let searchNewsService: SearchNewsService;

	beforeEach(() => {
		searchNewsService = new SearchNewsService();
	});
	it("Init keyword with ''", () => {
		expect(searchNewsService.getKeyword()).toBe('');
	});

	it('Set Keyword', () => {
		searchNewsService.setKeyword('korea');

		expect(searchNewsService.getKeyword()).toBe('korea');
	});
});
