import React from 'react';
import { News } from 'src/types/result/types';
import styled from 'styled-components';

const SearchItemContainer = styled.li`
	width: 100%;
	border: 1px solid #dddddd;
	border-radius: 8px;
	margin: 3% 0;
	padding: 3%;

	& > h2 {
		font-size: 1.5rem;
		margin: 0 0 1% 0;

		@media screen and (max-width: 768px) {
			font-size: 1.3rem;
		}
	}

	& > time {
		font-size: 0.75rem;
		color: #aaaaaa;
	}

	& > p {
		font-size: 1rem;
	}

	@media screen and (max-width: 480px) {
		padding: 4%;
	}
`;

type Props = {
	news: News;
	index: number;
};

const SearchItem = ({ news, index }: Props) => {
	return (
		<SearchItemContainer aria-labelledby={`news_title_${index}`}>
			<h2 id={`news_title_${index}`}>{news.title.replace(/(<([^>]+)>)/gi, '')}</h2>
			<time dateTime={news.wrt_dt}>{news.wrt_dt}</time>
			<p>{news.txt_origin_cn.replace(/&nbsp;/gi, ' ')}</p>
		</SearchItemContainer>
	);
};

export default SearchItem;
