import React from 'react';
import { screen, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Result from '@pages/result';
import SearchNewsService from '@services/search/search-news';
import { MemoryRouter, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Result', () => {
	let searchNewsService: SearchNewsService;

	const clickNextButton = () => {
		const nextButton = screen.getByRole('button', {
			name: 'next',
		});

		userEvent.click(nextButton);
	};

	const clickPrevButton = () => {
		const prevButton = screen.getByRole('button', {
			name: 'prev',
		});

		userEvent.click(prevButton);
	};

	beforeEach(() => {
		searchNewsService = new SearchNewsService();

		render(
			<MemoryRouter initialEntries={['/result/korea']}>
				<Route exact path="/result/:keyword">
					<Result searchNewsService={searchNewsService} />
				</Route>
			</MemoryRouter>,
		);
	});
	it('Snapshot', () => {
		const component = renderer.create(
			<BrowserRouter>
				<Result searchNewsService={searchNewsService} />
			</BrowserRouter>,
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('Show keyword in the parameter', () => {
		expect(
			screen.getByRole('heading', {
				name: 'Search results for korea.',
			}),
		).toBeInTheDocument();
	});
});
