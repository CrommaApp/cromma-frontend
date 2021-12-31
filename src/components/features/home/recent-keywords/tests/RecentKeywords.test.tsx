import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import RecentKeywords from '@components/features/home/recent-keywords';
import userEvent from '@testing-library/user-event';

describe('RecentKeywords', () => {
	const moveToReultPage = jest.fn();

	const mockRecentKeywords: string[] = ['korea', 'seoul'];

	beforeEach(() => {
		render(<RecentKeywords recentKeywords={mockRecentKeywords} moveToReultPage={moveToReultPage} />);
	});

	it('Snapshot', () => {
		const component = renderer.create(
			<RecentKeywords recentKeywords={mockRecentKeywords} moveToReultPage={moveToReultPage} />,
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('Show recent keyword list delivered through props', () => {
		const keywords = screen.getAllByRole('listitem');

		expect(keywords).toHaveLength(2);

		expect(keywords[0]).toHaveTextContent('korea');

		expect(keywords[1]).toHaveTextContent('seoul');
	});

	it('Move to result page when click keyword', () => {
		const keywords = screen.getAllByRole('listitem');

		userEvent.click(keywords[0]);

		expect(moveToReultPage).toHaveBeenCalledWith('korea');
	});
});
