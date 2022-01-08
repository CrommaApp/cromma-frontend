import React from 'react';
import styled from 'styled-components';
import PostItem from '@components/features/home/post-item';
import { Post } from '@services/post/types';

const PostListWrapper = styled.ul`
	width: 65%;
	height: 60%;
	margin-top: 5%;
	padding: 2%;
	background-color: white;
	border: 1px solid #dddddd;
	border-radius: 8px;
	overflow-y: scroll;

	@media screen and (max-width: 480px) {
		width: 80%;
		height: 70%;
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
