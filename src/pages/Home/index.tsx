import React from 'react';
import PostList from '@components/features/Home/PostList';
import { MorePostsButton } from './styled';
import { ContentWrapper } from '@components/shared/ContentWrapper/styled';
import useGetAllPosts from '@hooks/useGetAllPosts';
import PostsState from '@components/features/Home/PostsState';

const Home = () => {
	const [allPosts, isReachingEnd, isLoading, onClickMorePostsButton] = useGetAllPosts();

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
				{!isReachingEnd && (
					<MorePostsButton type="button" onClick={onClickMorePostsButton}>
						더보기
					</MorePostsButton>
				)}
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
