import React from 'react';
import { Keyword } from 'src/types/home/types';
import styled from 'styled-components';

const KeywordList = styled.ul`
	width: 40%;
	display: flex;
	align-items: center;
	padding: 1%;
	overflow-x: scroll;

	& > li {
		margin: 0 3%;
		font-size: 0.8rem;
		color: #aaaaaa;
		cursor: pointer;
	}

	@media screen and (max-width: 768px) {
		width: 60%;
	}

	@media screen and (max-width: 480px) {
		width: 80%;
	}
`;

type Props = {
	recentKeywords: Keyword[];
	moveToReultPage: (keyword: string) => void;
};

const RecentKeywords = ({ recentKeywords, moveToReultPage }: Props) => {
	return (
		<KeywordList>
			{recentKeywords?.map(({ id, content }) => (
				<li key={id} onClick={() => moveToReultPage(content)}>
					{content}
				</li>
			))}
		</KeywordList>
	);
};

export default RecentKeywords;
