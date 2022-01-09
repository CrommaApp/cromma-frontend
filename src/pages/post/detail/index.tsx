import React from 'react';
import PostDetailContent from '@components/features/detail/detail-content';
import { ContentWrapper } from '@components/shared/content-wrapper/styled';
import useGetPost from '@hooks/useGetPost';
import useDeletePost from '@hooks/useDeletePost';

const PostDetail = () => {
	const post = useGetPost();

	const deletePost = useDeletePost(post.id);

	return (
		<>
			<ContentWrapper>
				<h1 className="a11y-hidden">게시글 전체 내용</h1>
				<PostDetailContent post={post} deletePost={deletePost} />
			</ContentWrapper>
		</>
	);
};

export default PostDetail;
