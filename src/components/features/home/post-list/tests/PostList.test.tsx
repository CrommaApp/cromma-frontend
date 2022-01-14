import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import { Post } from '@services/post/types';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import PostList from '@components/features/home/post-list';
import PostDetail from '@pages/post/detail';
import { RecoilRoot } from 'recoil';

describe('PostList Component', () => {
	const mockPosts: Post[] = [
		{
			id: 1,
			title: 'test1',
			content: 'lorem',
			createdAt: '2021-12-12',
			updatedAt: '2021-12-14',
			User: {
				userId: 'test@gmail.com',
			},
			UserId: 2,
		},
		{
			id: 2,
			title: 'test2',
			content: 'loremlorem',
			createdAt: '2021-12-10',
			updatedAt: '2021-12-12',
			User: {
				userId: 'test@gmail.com',
			},
			UserId: 2,
		},
	];

	beforeEach(() => {
		render(
			<RecoilRoot>
				<MemoryRouter initialEntries={['/']}>
					<Routes>
						<Route path="/" element={<PostList postList={mockPosts} />} />
						<Route path="/post/:id" element={<PostDetail />} />
					</Routes>
				</MemoryRouter>
			</RecoilRoot>,
		);
	});

	it('Snapshot', () => {
		const component = renderer.create(
			<BrowserRouter>
				<PostList postList={mockPosts} />
			</BrowserRouter>,
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('Move to post detail page when click post item', async () => {
		const post = screen.getByRole('link', {
			name: 'test1 test@gmail.com 2021-12-12',
		});

		userEvent.click(post);

		expect(await screen.findByRole('article')).toBeInTheDocument();
	});
});
