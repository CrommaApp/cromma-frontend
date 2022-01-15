import '@testing-library/cypress/add-commands';
import { API_HOST } from '../../../src/services/api';

describe('Post Upload Page', () => {
	beforeEach(() => {
		cy.visit('/post/upload');
	});

	it('Render component', () => {
		cy.findByRole('heading', {
			name: '게시글 작성 폼',
		}).should('exist');
	});

	it('Move to post detail page when success to upload post', () => {
		cy.intercept(
			{
				method: 'POST',
				url: `${API_HOST}/post`,
			},
			{
				fixture: 'uploadedPost.json',
			},
		).as('UploadPost');

		cy.intercept(
			{
				method: 'GET',
				url: `${API_HOST}/post/1`,
			},
			{
				fixture: 'post.json',
			},
		).as('GetPosts');

		const titleInput = cy.findByLabelText('제목');
		titleInput.type('제목제목');

		const contentInput = cy.findByLabelText('내용');
		contentInput.type('내용내용');

		const submitButton = cy.findByRole('button', {
			name: '작성',
		});

		submitButton.click();

		cy.wait('@UploadPost');

		cy.findByRole('heading', {
			name: '게시글 전체 내용',
		}).should('exist');
	});
});
