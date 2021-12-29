import React from 'react';
import { render, screen } from '@testing-library/react';
import { News } from 'src/types/result/types';
import renderer from 'react-test-renderer';
import SearchItem from '@components/features/result/search-item';

describe('SearchItem', () => {
	const mockNews: News = {
		sfty_notice_id: '1',
		title: 'title',
		wrt_dt: '2021-12-14',
		txt_origin_cn: 'testtest',
	};

	beforeEach(() => {
		render(<SearchItem news={mockNews} index={1} />);
	});

	it('Snapshot', () => {
		const component = renderer.create(<SearchItem news={mockNews} index={1} />);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('Show news information delivered through props', () => {
		expect(
			screen.getByRole('heading', {
				name: 'title',
			}),
		).toBeInTheDocument();

		expect(screen.getByText('testtest')).toBeInTheDocument();

		expect(screen.getByText('2021-12-14')).toBeInTheDocument();
	});
});
