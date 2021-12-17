import React from 'react';
import { News } from 'src/types/result/types';
import styled from 'styled-components';

const SearchItemContainer = styled.li`
	width: 100%;
	border: 1px solid #dddddd;
	border-radius: 8px;
	margin: 2% 0;
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
};

const SearchItem = ({ news }: Props) => {
	return (
		<SearchItemContainer>
			<h2>{news.title}</h2>
			<time dateTime={news.wrt_dt}>{news.wrt_dt}</time>
			<p>{news.txt_origin_cn}</p>
		</SearchItemContainer>
	);
};

export default SearchItem;
