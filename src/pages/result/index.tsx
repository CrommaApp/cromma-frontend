import React from 'react';
import { useParams } from 'react-router';
import SearchResult from '@components/features/result/search-list';
import styled from 'styled-components';

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

const PageButtonList = styled.ul`
	width: 100%;
	padding: 3% 12%;
	position: absolute;
	bottom: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	background-color: white;

	& > li {
		width: 20%;
		&:first-child > button {
			background-color: white;
			color: #888888;
		}
		&:last-child > button {
			background-color: #dddddd;
			color: white;
		}

		@media screen and (max-width: 480px) {
			width: 32%;
		}
	}

	& button {
		width: 100%;
		padding: 10% 0;
		font-size: 1.5rem;
		font-family: var(--font-sans-bold);
		border-radius: 100px;
		border: 1px solid #dddddd;

		@media screen and (max-width: 480px) {
			font-size: 1.2rem;
		}
	}
`;

type Params = {
	keyword: string;
};

const Result = () => {
	const params = useParams<Params>();

	return (
		<ResultContainer>
			<h1>Search results for Korea.</h1>
			<SearchResult />
			<PageButtonList>
				<li>
					<button type="button">prev</button>
				</li>
				<li>
					<button type="button">next</button>
				</li>
			</PageButtonList>
		</ResultContainer>
	);
};

export default Result;
