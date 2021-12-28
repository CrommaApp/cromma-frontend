import React from 'react';
import styled from 'styled-components';
import SearchItem from '../search-item';
import { News } from 'src/types/result/types';

export const dummyNews: News[] = [
	{
		sfty_notice_id: '1',
		title: 'title',
		wrt_dt: '2021-12-14',
		txt_origin_cn: 'testtest',
	},
	{
		sfty_notice_id: '2',
		title: 'title',
		wrt_dt: '2021-12-14',
		txt_origin_cn: 'testtest',
	},
	{
		sfty_notice_id: '3',
		title: 'title',
		wrt_dt: '2021-12-14',
		txt_origin_cn: 'testtest',
	},
	{
		sfty_notice_id: '4',
		title: 'title',
		wrt_dt: '2021-12-14',
		txt_origin_cn: 'testtest',
	},
];

const SearchList = styled.ul`
	width: 65%;
	height: 60%;
	margin-top: 5%;
	padding: 2%;
	background-color: white;
	border: 1px solid #dddddd;
	border-radius: 8px;
	overflow-y: scroll;

	@media screen and (max-width: 480px) {
		width: 80%;
		height: 70%;
	}
`;

const SearchResult = () => {
	return (
		<SearchList aria-labelledby="search_result">
			{dummyNews.map((news, index) => (
				<SearchItem key={news.sfty_notice_id} news={news} index={index} />
			))}
		</SearchList>
	);
};

export default SearchResult;
