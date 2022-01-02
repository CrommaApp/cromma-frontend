import React, { useCallback } from 'react';
import SearchForm from '@components/features/home/search-form';
import SearchNewsService from '@services/search/search-news';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import RecentKeywords from '@components/features/home/recent-keywords';
import { useRecoilValue } from 'recoil';
import { userState } from '@stores/user';

const HomeContainer = styled.section`
	width: 100%;
	height: 100%;
	padding: 20% 2% 0 2%;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #888888;

	& > h1 {
		margin: 0;
		font-family: var(--font-sans-bold);
		font-size: 2.75rem;
	}

	& > h2 {
		font-family: var(--font-sans-bold);
		font-size: 1.375rem;
	}
`;

type Props = {
	searchNewsService: SearchNewsService;
};

const Home = ({ searchNewsService }: Props) => {
	const history = useHistory();

	const moveToReultPage = useCallback((keyword: string) => {
		history.push(`/result/${keyword}`);
	}, []);

	const { recentKeywords } = useRecoilValue(userState);

	return (
		<HomeContainer>
			<h1>Cromma</h1>
			<h2 id="search_guide">Please enter related keyword</h2>
			<SearchForm searchNewsService={searchNewsService} moveToReultPage={moveToReultPage} />
			<RecentKeywords recentKeywords={recentKeywords} moveToReultPage={moveToReultPage} />
		</HomeContainer>
	);
};

export default Home;
