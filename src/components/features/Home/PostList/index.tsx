import React from 'react';
import styled from 'styled-components';
import PostItem from '@components/features/Home/PostItem';
import { Post } from '@services/post/types';

const PostListWrapper = styled.ul`
	width: 100%;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 3%;
	padding: 0 12%;
	margin: 8% 0;

	@media screen and (max-width: 480px) {
		padding: 0 8%;
	}
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
