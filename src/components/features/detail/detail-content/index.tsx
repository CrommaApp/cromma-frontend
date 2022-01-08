import React from 'react';
import { Post } from '@services/post/types';
import styled from 'styled-components';

type Props = {
	post: Post;
};

const PostDetailContentWrapper = styled.article`
	width: 100%;
	height: 100%;
	padding: 0 20%;

	& > h2 {
		font-size: 1.8rem;
		margin: 0 0 1% 0;

		@media screen and (max-width: 768px) {
			font-size: 1.5rem;
		}
	}

	& > time {
		font-size: 0.9rem;
		color: #aaaaaa;
	}

	& > p {
		font-size: 1.1rem;
		overflow-wrap: break-word;
	}
`;

const PostDetailContent = ({ post }: Props) => {
	return (
		<PostDetailContentWrapper>
			<h2>{post.title}</h2>
			<time dateTime={post.createdAt}>{post.createdAt}</time>
			<p>{post.content}</p>
		</PostDetailContentWrapper>
	);
};

export default PostDetailContent;
