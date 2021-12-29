import React from 'react';
import styled from 'styled-components';
import SearchItem from '../search-item';
import { News } from 'src/types/result/types';

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

type Props = {
	searchList: News[];
};

const SearchResult = ({ searchList }: Props) => {
	return (
		<SearchList aria-labelledby="search_result">
			{searchList?.map((news, index) => (
				<SearchItem key={news.sfty_notice_id} news={news} index={index} />
			))}
		</SearchList>
	);
};

export default SearchResult;
