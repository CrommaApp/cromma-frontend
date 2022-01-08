import React from 'react';
import styled from 'styled-components';
import PostItem from '@components/features/home/post-item';
import { Post } from '@services/post/types';

const PostListWrapper = styled.ul`
	width: 100%;
	height: 100%;
`;

type Props = {
	postList: Post[];
};

const PostList = ({ postList }: Props) => {
	return (
		<PostListWrapper aria-labelledby="search_result">
			{postList?.map((post, index) => (
				<PostItem key={post.id} post={post} index={index} />
			))}
		</PostListWrapper>
	);
};

export default PostList;
