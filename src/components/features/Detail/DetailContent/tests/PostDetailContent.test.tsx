import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import PostDetailContent from '@components/features/Detail/DetailContent';
import { Post } from '@services/post/types';
import { RecoilRoot } from 'recoil';

describe('PostDetailContent Component', () => {
	const mockPost: Post = {
		id: 1,
		title: 'test',
		content: 'lorem',
		createdAt: '2021-12-12',
		updatedAt: '2021-12-14',
		User: {
			userId: 'test@gmail.com',
		},
		UserId: 2,
	};

	const mockedDeletePost = jest.fn();

	it('Snapshot', () => {
		const component = renderer.create(
			<RecoilRoot>
				<PostDetailContent post={mockPost} isMyPost={true} deletePost={mockedDeletePost} />
			</RecoilRoot>,
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('Call deletePost() when click delete button', () => {
		render(
			<RecoilRoot>
				<PostDetailContent post={mockPost} isMyPost={true} deletePost={mockedDeletePost} />
			</RecoilRoot>,
		);

		const deleteButton = screen.getByRole('button', {
			name: '삭제하기',
		});

		userEvent.click(deleteButton);

		expect(mockedDeletePost).toBeCalled();
	});

	it('Hide delete button if post is not mine', () => {
		render(
			<RecoilRoot>
				<PostDetailContent post={mockPost} isMyPost={false} deletePost={mockedDeletePost} />
			</RecoilRoot>,
		);

		expect(() =>
			screen.getByRole('button', {
				name: '삭제하기',
			}),
		).toThrowError();
	});
});
