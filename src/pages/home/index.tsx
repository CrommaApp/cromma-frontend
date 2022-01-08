import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PostList from '@components/features/home/post-list';
import Loading from '@components/features/home/loading';
import { Post } from '@services/post/types';
import { PageButtons } from './styled';
import { ContentWrapper } from '@components/shared/content-wrapper/styled';

const Home = () => {
	const [postList, setPostList] = useState<Post[]>([]);
	const isEmpty = useMemo(() => postList?.length === 0, [postList]);
	const isReachingEnd = useMemo(() => isEmpty || (postList && postList?.length < 10) || false, [isEmpty, postList]);

	const [curPage, setCurPage] = useState(1);
	const handleChangeCurPage = useCallback(
		(pageNum: number) => {
			if (isReachingEnd) {
				return;
			}
			setCurPage(pageNum);
		},
		[isReachingEnd],
	);

	const [isLoading, setIsLoading] = useState(false);

	const getAllSearchList = async () => {
		setIsLoading(true);

		setIsLoading(false);
	};

	useEffect(() => {
		getAllSearchList();
	}, [curPage]);

	return (
		<>
			<ContentWrapper>
				<h1 className="a11y-hidden">전체 게시글 목록</h1>
				{isLoading ? <Loading /> : <PostList postList={postList} />}
			</ContentWrapper>

			<PageButtons>
				<button type="button" onClick={() => handleChangeCurPage(curPage - 1)}>
					이전
				</button>
				<p data-testid="current_page">{curPage}</p>
				<button type="button" onClick={() => handleChangeCurPage(curPage + 1)}>
					다음
				</button>
			</PageButtons>
		</>
	);
};

export default Home;
