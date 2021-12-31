import SearchNewsService from '@services/search-news';
import { News } from 'src/types/result/types';

describe('SearchNewsService', () => {
	let searchNewsService: SearchNewsService;
	const update = jest.fn();

	const setAllValues = () => {
		searchNewsService.setKeyword('korea', update);
		searchNewsService.setCurPage(5, update);
		searchNewsService.setTotalPage(10, update);
		searchNewsService.setNewsList(mockNewsList, update);
	};

	const mockNewsList: News[] = [
		{
			sfty_notice_id: '1',
			title: 'title',
			wrt_dt: '2021-12-14',
			txt_origin_cn: 'testtest',
		},
		{
			sfty_notice_id: '2',
			title: 'title',
			wrt_dt: '2021-12-14',
			txt_origin_cn: 'testtest',
		},
		{
			sfty_notice_id: '3',
			title: 'title',
			wrt_dt: '2021-12-14',
			txt_origin_cn: 'testtest',
		},
	];

	beforeEach(() => {
		searchNewsService = new SearchNewsService();
	});

	describe('Init value', () => {
		it("Init keyword with ''", () => {
			expect(searchNewsService.getKeyword()).toBe('');
		});

		it('Init limit with 5', () => {
			expect(searchNewsService.getLimit()).toBe(5);
		});

		it('Init current page with 1', () => {
			expect(searchNewsService.getCurPage()).toBe(1);
		});

		it('Init total page with 1', () => {
			expect(searchNewsService.getTotalPage()).toBe(1);
		});

		it("Init news list with []'", () => {
			expect(searchNewsService.getNewsList()).toEqual([]);
		});
	});

	describe('Set value', () => {
		it('Set Keyword', () => {
			searchNewsService.setKeyword('korea', update);

			expect(searchNewsService.getKeyword()).toBe('korea');

			expect(update).toBeCalledWith('korea');
		});

		it('Set current page', () => {
			searchNewsService.setCurPage(5, update);

			expect(searchNewsService.getCurPage()).toBe(5);

			expect(update).toBeCalledWith(5);
		});

		it('Set total page', () => {
			searchNewsService.setTotalPage(10, update);

			expect(searchNewsService.getTotalPage()).toBe(10);

			expect(update).toBeCalledWith(10);
		});

		it('Set news list', () => {
			searchNewsService.setNewsList(mockNewsList, update);

			expect(searchNewsService.getNewsList()).toEqual(mockNewsList);

			expect(update).toBeCalledWith(mockNewsList);
		});
	});

	it('Reset all values', () => {
		setAllValues();

		searchNewsService.resetAll();

		expect(searchNewsService.getKeyword()).toBe('');
		expect(searchNewsService.getLimit()).toBe(5);
		expect(searchNewsService.getCurPage()).toBe(1);
		expect(searchNewsService.getTotalPage()).toBe(1);
		expect(searchNewsService.getNewsList()).toEqual([]);
	});
});
