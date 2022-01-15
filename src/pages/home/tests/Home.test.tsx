import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Home from '@pages/Home';
import * as useGetAllPosts from '@hooks/useGetAllPosts';
import { Post } from '@services/post/types';

type ReturnType = [Post[], boolean, boolean, () => Promise<void>];

describe('Home Component', () => {
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

	const mockedOnClickMorePostsButton = jest.fn();

	const spyOnUseGetAllPosts = (returnData: ReturnType) => {
		const mockedUseGetAllPosts = jest.spyOn(useGetAllPosts, 'default');
		mockedUseGetAllPosts.mockImplementation(() => returnData);

		render(
			<RecoilRoot>
				<BrowserRouter>
					<Home />
				</BrowserRouter>
			</RecoilRoot>,
		);
	};

	it('Snapshot', () => {
		const component = renderer.create(
			<RecoilRoot>
				<BrowserRouter>
					<Home />
				</BrowserRouter>
			</RecoilRoot>,
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('Show "no posts" if there is no post', () => {
		spyOnUseGetAllPosts([[], true, false, mockedOnClickMorePostsButton]);

		expect(
			screen.getByRole('heading', {
				name: '게시글이 없습니다.',
			}),
		).toBeInTheDocument();
	});

	it('Show "loading..." if posts is being imported', () => {
		spyOnUseGetAllPosts([[], false, true, mockedOnClickMorePostsButton]);

		expect(
			screen.getByRole('heading', {
				name: '불러오는 중...',
			}),
		).toBeInTheDocument();
	});

	it('Call onClickMorePostsButton() if click more posts button', () => {
		spyOnUseGetAllPosts([mockPosts, false, false, mockedOnClickMorePostsButton]);

		const morePostButton = screen.getByRole('button', {
			name: '더보기',
		});

		userEvent.click(morePostButton);

		expect(mockedOnClickMorePostsButton).toHaveBeenCalled();
	});
});
