import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchForm from '@components/features/home/search-form';
import SearchNewsService from '@services/search/search-news';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

describe('SearchForm', () => {
	let searchNewsService: SearchNewsService;
	let moveToReultPage: (keyword: string) => void;

	const clickSearchButton = () => {
		const searchButton = screen.getByRole('button', {
			name: 'Search',
		});

		userEvent.click(searchButton);
	};

	beforeEach(() => {
		searchNewsService = new SearchNewsService();
		moveToReultPage = jest.fn();

		render(<SearchForm searchNewsService={searchNewsService} moveToReultPage={moveToReultPage} />);
	});

	it('Snapshot', () => {
		const component = renderer.create(
			<SearchForm searchNewsService={searchNewsService} moveToReultPage={moveToReultPage} />,
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('Go to the result page when success to search', async () => {
		const searchInput = screen.getByRole('searchbox', {
			name: 'keywords',
		});

		userEvent.type(searchInput, 'korea');

		clickSearchButton();

		expect(moveToReultPage).toHaveBeenCalledWith('korea');
	});

	it('Keyword must be entered', async () => {
		clickSearchButton();

		expect(moveToReultPage).not.toBeCalled();
	});
});
