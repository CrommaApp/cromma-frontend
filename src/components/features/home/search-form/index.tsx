import SearchNewsService from '@services/search/search-news';
import React, { useState } from 'react';
import { SearchFormContainer } from './styled';

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
