import React from 'react';
import { Post } from '@services/post/types';
import PostDetailContent from '@components/features/detail/detail-content';
import { ContentWrapper } from '@components/shared/content-wrapper/styled';

const PostDetail = () => {
	const mockPost: Post = {
		id: 1,
		title: 'title',
		createdAt: '2021-12-12',
		content: 'testetstetststsetseteste',
	};
	return (
		<>
			<ContentWrapper>
				<h1 className="a11y-hidden">게시글 전체 내용</h1>
				<PostDetailContent post={mockPost} />
			</ContentWrapper>
		</>
	);
};

export default PostDetail;
