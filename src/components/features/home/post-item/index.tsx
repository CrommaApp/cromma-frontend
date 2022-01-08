import { Post } from '@services/post/types';
import React from 'react';
import styled from 'styled-components';

const PostItemWrapper = styled.li`
	width: 100%;
	border: 1px solid #dddddd;
	border-radius: 8px;
	margin: 3% 0;
	padding: 3%;

	& > h2 {
		font-size: 1.5rem;
		margin: 0 0 1% 0;

		@media screen and (max-width: 768px) {
			font-size: 1.3rem;
		}
	}

	& > time {
		font-size: 0.75rem;
		color: #aaaaaa;
	}

	& > p {
		font-size: 1rem;
	}

	@media screen and (max-width: 480px) {
		padding: 4%;
	}
`;

type Props = {
	post: Post;
	index: number;
};

const PostItem = ({ post, index }: Props) => {
	return (
		<PostItemWrapper aria-labelledby={`post_title_${index}`}>
			<h2 id={`post_title_${index}`}>{post.title}</h2>
			{/* <time dateTime={post.createdAt}>{post.createdAt}</time>
			<p>{post.content}</p> */}
		</PostItemWrapper>
	);
};

export default PostItem;
