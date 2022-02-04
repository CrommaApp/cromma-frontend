import React from 'react';
import PostDetailContent from '@components/features/Detail/DetailContent';
import { ContentWrapper } from '@components/shared/ContentWrapper/styled';
import useGetPost from '@hooks/useGetPost';
import useDeletePost from '@hooks/useDeletePost';

const PostDetail = () => {
	const [post, isMyPost] = useGetPost();

	const deletePost = useDeletePost(post.id);

	return (
		<>
			<ContentWrapper>
				<h1 className="a11y-hidden">게시글 전체 내용</h1>
				<PostDetailContent post={post} isMyPost={isMyPost} deletePost={deletePost} />
			</ContentWrapper>
		</>
	);
};

export default PostDetail;
