import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import PostsState from '..';

describe('PostState Component', () => {
	const mockStatement = '로딩 중 입니다.';
	beforeEach(() => {
		render(<PostsState statement={mockStatement} />);
	});

	it('Snapshot', () => {
		const component = renderer.create(<PostsState statement={mockStatement} />);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('Show statement of fetching post', () => {
		expect(
			screen.getByRole('heading', {
				name: mockStatement,
			}),
		);
	});
});
