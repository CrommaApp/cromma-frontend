import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PostList from '@components/features/home/post-list';
import styled from 'styled-components';
import Loading from '@components/features/home/loading';
import { Post } from '@services/post/types';

const HomeWrapper = styled.section`
	width: 100%;
	height: 100%;
	padding: 8% 2% 0 2%;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #888888;

	& > h1 {
		margin: 0;
		font-family: var(--font-sans-bold);
		font-size: 2.75rem;

		@media screen and (max-width: 768px) {
			font-size: 2.5rem;
		}

		@media screen and (max-width: 480px) {
			font-size: 2rem;
		}
	}
`;

const PageButtons = styled.div`
	width: 100%;
	padding: 3% 12%;
	position: absolute;
	bottom: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	background-color: white;

	& > button {
		width: 20%;
		padding: 3% 0;
		font-size: 1.5rem;
		font-family: var(--font-sans-bold);
		border-radius: 100px;
		border: 1px solid #dddddd;

		&:first-child {
			background-color: white;
			color: #888888;
		}
		&:last-child {
			background-color: #dddddd;
			color: white;
		}

		@media screen and (max-width: 480px) {
			font-size: 1.2rem;
			width: 32%;
		}
	}

	& > p {
		margin: 0;
		font-size: 1.2rem;

		@media screen and (max-width: 480px) {
			font-size: 1rem;
		}
	}
`;

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
		<HomeWrapper>
			<h1 id="search_result">게시글 목록</h1>
			{isLoading ? <Loading /> : <PostList postList={postList} />}
			<PageButtons>
				<button type="button" onClick={() => handleChangeCurPage(curPage - 1)}>
					prev
				</button>
				<p data-testid="current_page">{curPage}</p>
				<button type="button" onClick={() => handleChangeCurPage(curPage + 1)}>
					next
				</button>
			</PageButtons>
		</HomeWrapper>
	);
};

export default Home;
