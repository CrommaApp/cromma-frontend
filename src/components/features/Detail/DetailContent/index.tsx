import React from 'react';
import { Post } from '@services/post/types';
import { PostDetailContentWrapper } from './styled';

type Props = {
	post: Post;
	isMyPost: boolean;
	deletePost: () => Promise<void>;
};

const PostDetailContent = ({ post, isMyPost, deletePost }: Props) => {
	return (
		<PostDetailContentWrapper>
			<h2>{post.title}</h2>
			<time dateTime={post.createdAt}>{post.createdAt}</time>
			<p>작성자 : {post.User.userId}</p>
			<p>{post.content}</p>
			{isMyPost && (
				<button type="button" onClick={deletePost}>
					삭제하기
				</button>
			)}
		</PostDetailContentWrapper>
	);
};

export default PostDetailContent;
