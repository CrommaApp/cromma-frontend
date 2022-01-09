import React from 'react';
import PostList from '@components/features/home/post-list';
import { MorePostsButton } from './styled';
import { ContentWrapper } from '@components/shared/content-wrapper/styled';
import useGetAllPosts from '@hooks/useGetAllPosts';
import PostsState from '@components/features/home/posts-state';

const Home = () => {
	const [allPosts, isLoading, onClickMorePostsButton] = useGetAllPosts();

	const showPostsState = () => {
		if (isLoading) {
			return <PostsState statement="불러오는 중..." />;
		}

		if (allPosts.length === 0) {
			return <PostsState statement="게시글이 없습니다." />;
		}

		return (
			<>
				<PostList postList={allPosts} />
				<MorePostsButton type="button" onClick={onClickMorePostsButton}>
					더보기
				</MorePostsButton>
			</>
		);
	};

	return (
		<ContentWrapper>
			<h1 className="a11y-hidden">전체 게시글 목록</h1>
			{showPostsState()}
		</ContentWrapper>
	);
};

export default Home;
