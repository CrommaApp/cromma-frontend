import React from 'react';
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
	recentKeywords: string[];
	moveToReultPage: (keyword: string) => void;
};

const RecentKeywords = ({ recentKeywords, moveToReultPage }: Props) => {
	return (
		<KeywordList>
			{recentKeywords.map((keyword, idx) => (
				<li key={idx} onClick={() => moveToReultPage(keyword)}>
					{keyword}
				</li>
			))}
		</KeywordList>
	);
};

export default RecentKeywords;
