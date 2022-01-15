import React, { useMemo } from 'react';
import PostDetailContent from '@components/features/Detail/DetailContent';
import { ContentWrapper } from '@components/shared/ContentWrapper/styled';
import useGetPost from '@hooks/useGetPost';
import useDeletePost from '@hooks/useDeletePost';
import { useRecoilValue } from 'recoil';
import { userState } from '@stores/user';

const PostDetail = () => {
	const post = useGetPost();

	const deletePost = useDeletePost(post.id);

	const user = useRecoilValue(userState);

	const isMyPost = useMemo(() => user.id === post.User.userId, [user, post]);

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
