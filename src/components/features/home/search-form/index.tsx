import SearchNewsService from '@services/search/search-news';
import React, { useState } from 'react';
import styled from 'styled-components';

const SearchFormContainer = styled.form`
	display: flex;
	align-items: center;
	width: 40%;
	margin-top: 12%;

	& > input {
		width: 50%;
		padding: 4%;
		border: 1px solid #dddddd;
		margin-right: 2%;
		border-radius: 8px;
		outline: none;

		&:focus {
			border: 2px solid #aaaaaa;
		}
	}

	& > button {
		width: 48%;
		background-color: #aaaaaa;
		color: white;
		border-radius: 100px;
		padding: 3% 0;
		font-size: 1.5rem;

		@media screen and (max-width: 768px) {
			font-size: 1.2rem;
		}
	}

	& > p {
		font-size: 0.8rem;
	}

	@media screen and (max-width: 768px) {
		width: 60%;
	}

	@media screen and (max-width: 480px) {
		width: 80%;
	}
`;

type Props = {
	searchNewsService: SearchNewsService;
	moveToReultPage: (keyword: string) => void;
};

const SearchForm = ({ searchNewsService, moveToReultPage }: Props) => {
	const [keyword, setKeyword] = useState(searchNewsService.getKeyword());

	const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
		searchNewsService.setKeyword(e.target.value, setKeyword);
	};

	const submitSearchForm = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (keyword.trim() !== '') {
			moveToReultPage(keyword);
			try {
				await searchNewsService.addRecentKeyword({
					content: keyword,
				});
			} catch (error) {
				console.error(error);
			}
		}
	};

	return (
		<SearchFormContainer aria-labelledby="search_guide" onSubmit={submitSearchForm}>
			<label htmlFor="search_input" className="a11y-hidden">
				keywords
			</label>
			<input id="search_input" aria-required="true" type="search" value={keyword} onChange={handleChangeKeyword} />
			<button type="submit">Search</button>
		</SearchFormContainer>
	);
};

export default SearchForm;
