import React, { useEffect } from 'react';
import PostDetailContent from '@components/features/detail/detail-content';
import { ContentWrapper } from '@components/shared/content-wrapper/styled';
import useGetPost from '@hooks/useGetPost';

const PostDetail = () => {
	const [post, getPost] = useGetPost();

	useEffect(() => {
		getPost();
	}, []);

	return (
		<>
			<ContentWrapper>
				<h1 className="a11y-hidden">게시글 전체 내용</h1>
				<PostDetailContent post={post} />
			</ContentWrapper>
		</>
	);
};

export default PostDetail;
