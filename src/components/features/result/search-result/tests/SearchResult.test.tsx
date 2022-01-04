import React from 'react';
import { News } from 'src/types/result/types';
import SearchResult from '@components/features/result/search-result';
import { screen, render } from '@testing-library/react';
import renderer from 'react-test-renderer';

describe('SearchResult', () => {
	const mockSearchList: News[] = [
		{
			sfty_notice_id: '1',
			title: 'title1',
			wrt_dt: '2021-12-14',
			txt_origin_cn: 'testtest',
		},
		{
			sfty_notice_id: '2',
			title: 'title2',
			wrt_dt: '2021-12-15',
			txt_origin_cn: 'testtesttest',
		},
	];

	beforeEach(() => {
		render(<SearchResult searchList={mockSearchList} />);
	});

	it('Snapshot', () => {
		const component = renderer.create(<SearchResult searchList={mockSearchList} />);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('Show news list delivered through props', () => {
		const searchList = screen.getAllByRole('listitem');

		expect(searchList).toHaveLength(2);

		expect(
			screen.getByRole('heading', {
				name: 'title1',
			}),
		).toBeInTheDocument();

		expect(
			screen.getByRole('heading', {
				name: 'title2',
			}),
		).toBeInTheDocument();
	});
});
