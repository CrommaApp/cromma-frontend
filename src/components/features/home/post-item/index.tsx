import { Post } from '@services/post/types';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostItemWrapper = styled.li`
	width: 100%;
	border: 1px solid #dddddd;
	border-radius: 8px;
	margin: 3% 0;
	padding: 3%;
	cursor: pointer;

	& > a {
		font-size: 1.4rem;
		margin: 0 0 1% 0;
		color: #888888;

		@media screen and (max-width: 768px) {
			font-size: 1.3rem;
		}
	}

	@media screen and (max-width: 480px) {
		padding: 4%;
	}
`;

const PostItemLink = styled(Link)`
	display: flex;
	justify-content: space-between;
	align-items: center;

	& > span {
		font-size: 0.7rem;
		display: flex;
		flex-direction: column;
	}
`;

type Props = {
	post: Post;
	index: number;
};

const PostItem = ({ post, index }: Props) => {
	return (
		<PostItemWrapper aria-labelledby={`post_title_${index}`}>
			<PostItemLink to={`/post/${post.id}`} id={`post_title_${index}`}>
				{post.title}
				<span>
					{post.User.userId}
					<br />
					<br />
					{post.createdAt}
				</span>
			</PostItemLink>
		</PostItemWrapper>
	);
};

export default PostItem;
