import React from 'react';
import { Post } from '@services/post/types';
import { PostDetailContentWrapper } from './styled';
import { useRecoilValue } from 'recoil';
import { userState } from '@stores/user';

type Props = {
	post: Post;
	deletePost: () => Promise<void>;
};

const PostDetailContent = ({ post, deletePost }: Props) => {
	const user = useRecoilValue(userState);

	return (
		<PostDetailContentWrapper>
			<h2>{post.title}</h2>
			<time dateTime={post.createdAt}>{post.createdAt}</time>
			<p>{post.User.userId}</p>
			<p>{post.content}</p>
			{user.id === post.User.userId && <button onClick={deletePost}>삭제하기</button>}
		</PostDetailContentWrapper>
	);
};

export default PostDetailContent;
