import SearchForm from '@components/features/home/search-form';
import React from 'react';
import styled from 'styled-components';

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

const Home = () => {
	return (
		<HomeContainer>
			<h1>CONEW</h1>
			<h2 id="search_guide">Please enter related keywords</h2>
			<SearchForm />
		</HomeContainer>
	);
};

export default Home;
