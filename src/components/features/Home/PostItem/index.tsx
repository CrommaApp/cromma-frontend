import React from 'react';
import { Post } from '@services/post/types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { titleFormatter } from '@utils/formatter';

const PostItemWrapper = styled.li`
	width: 22%;
	border: 1px solid #dddddd;
	border-radius: 28px;
	margin: 3% 0;
	cursor: pointer;
	box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 0.3);
	background-color: white;

	& > a {
		font-size: 1.4rem;
		margin: 0 0 1% 0;
		color: #888888;
		padding: 20% 1%;
	}

	@media screen and (max-width: 1080px) {
		& > a {
			font-size: 1.2rem;
		}
	}

	@media screen and (max-width: 768px) {
		width: 31%;
		padding: 4%;

		& > a {
			font-size: 1.1rem;
		}
	}

	@media screen and (max-width: 480px) {
		width: 48%;
		padding: 6% 2%;

		& > a {
			font-size: 0.9rem;
		}
	}
`;

const PostItemLink = styled(Link)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	& > span {
		text-align: center;
		font-size: 0.7rem;
		display: flex;
		flex-direction: column;
		padding-top: 8%;

		@media screen and (max-width: 480px) {
			font-size: 0.6rem;
		}
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
				{titleFormatter(post.title)}
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
