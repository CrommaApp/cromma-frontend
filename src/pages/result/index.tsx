import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SearchResult from '@components/features/result/search-result';
import styled from 'styled-components';
import SearchNewsService from '@services/search-news';
import { News } from 'src/types/result/types';
import Loading from '@components/features/result/loading';

const ResultContainer = styled.section`
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
`;

type Params = {
	keyword: string;
};

type Props = {
	searchNewsService: SearchNewsService;
};

const Result = ({ searchNewsService }: Props) => {
	const params = useParams<Params>();

	const [totalPage, setTotalPage] = useState(searchNewsService.getTotalPage());
	const handleChangeTotalPage = useCallback((totalPageNum: number) => {
		searchNewsService.setTotalPage(totalPageNum, setTotalPage);
	}, []);

	const [curPage, setCurPage] = useState(searchNewsService.getCurPage());
	const handleChangeCurPage = useCallback(
		(pageNum: number) => {
			if (pageNum === 0 || pageNum > totalPage) {
				return;
			}
			searchNewsService.setCurPage(pageNum, setCurPage);
		},
		[totalPage],
	);

	const [keyword, setKeyword] = useState(searchNewsService.getKeyword());
	const handleChangeKeyword = useCallback((keyword: string) => {
		searchNewsService.setKeyword(keyword, setKeyword);
	}, []);

	const [searchList, setSearchList] = useState<News[]>(searchNewsService.getNewsList());
	const handleChangeSearchList = useCallback((newsList: News[]) => {
		searchNewsService.setNewsList(newsList, setSearchList);
	}, []);

	const [isLoading, setIsLoading] = useState(false);

	const getAllSearchList = async () => {
		setIsLoading(true);

		const result = await searchNewsService.getSearchResultData();
		handleChangeTotalPage(result.totalPage);
		handleChangeSearchList(result.news);

		setIsLoading(false);
	};

	useEffect(() => {
		if (searchNewsService.getKeyword() === '') {
			handleChangeKeyword(params.keyword);
		}
		getAllSearchList();
	}, [curPage]);

	return (
		<ResultContainer>
			<h1 id="search_result">Search results for {keyword}.</h1>
			{isLoading ? <Loading /> : <SearchResult searchList={searchList} />}
			<PageButtons aria-label="pagination buttons">
				<button type="button" onClick={() => handleChangeCurPage(curPage - 1)}>
					prev
				</button>
				<button type="button" onClick={() => handleChangeCurPage(curPage + 1)}>
					next
				</button>
			</PageButtons>
		</ResultContainer>
	);
};

export default Result;
