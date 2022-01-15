import '@testing-library/cypress/add-commands';
import { API_HOST } from '../../../src/services/api';

describe('Post Detail Page', () => {
	beforeEach(() => {
		cy.intercept(
			{
				method: 'GET',
				url: `${API_HOST}/post/1`,
			},
			{
				fixture: 'post.json',
			},
		).as('GetPosts');

		cy.visit('/post/1');

		cy.wait('@GetPosts');
	});

	it('Render component', () => {
		cy.findByRole('heading', {
			name: '게시글 전체 내용',
		}).should('exist');
	});

	it('Show post detail content', () => {
		cy.findByText('제목1').should('exist');
		cy.findByText('2021-12-12').should('exist');
		cy.findByText('lorem').should('exist');
	});
});
