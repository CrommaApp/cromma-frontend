import SearchNewsService from '@services/search-news';

describe('SearchNewsService', () => {
	let searchNewsService: SearchNewsService;
	const update = jest.fn();

	beforeEach(() => {
		searchNewsService = new SearchNewsService();
	});
	it("Init keyword with ''", () => {
		expect(searchNewsService.getKeyword()).toBe('');
	});

	it('Set Keyword', () => {
		searchNewsService.setKeyword('korea', update);

		expect(searchNewsService.getKeyword()).toBe('korea');

		expect(update).toBeCalledWith('korea');
	});
});
