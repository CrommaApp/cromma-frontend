import '@testing-library/cypress/add-commands';
import { API_HOST } from '../../../src/services/api';

describe('Home Page', () => {
	describe('Posts is not empty', () => {
		beforeEach(() => {
			cy.intercept(
				{
					method: 'GET',
					url: `${API_HOST}/posts/?lastId=0`,
				},
				{
					fixture: 'postList.json',
				},
			).as('GetAllPosts');

			cy.visit('/');

			cy.wait('@GetAllPosts');
		});

		it('Render component', () => {
			cy.findByRole('heading', {
				name: '전체 게시글 목록',
			}).should('exist');
		});

		it('Render post list', () => {
			cy.findByText('제목1').should('exist');
			cy.findByText('제목2').should('exist');
		});

		it('Move to post detail page when click post', () => {
			cy.intercept(
				{
					method: 'GET',
					url: `${API_HOST}/post/*`,
				},
				{
					fixture: 'post.json',
				},
			).as('GetAllPosts');

			const post = cy.findByText('제목1');

			post.click();

			cy.findByRole('heading', {
				name: '게시글 전체 내용',
			}).should('exist');
		});

		it("Move to post upload page when click 'upload post' button", () => {
			const uploadPostButton = cy.findByRole('link', {
				name: '게시글 작성',
			});

			uploadPostButton.click();

			cy.findByRole('heading', {
				name: '게시글 작성 폼',
			}).should('exist');
		});
	});

	describe('Posts is empty', () => {
		beforeEach(() => {
			cy.intercept(
				{
					method: 'GET',
					url: `${API_HOST}/posts/?lastId=0`,
				},
				{
					body: {
						statusCode: 200,
						data: [],
					},
				},
			).as('GetAllPosts');

			cy.visit('/');

			cy.wait('@GetAllPosts');
		});

		it("Show 'no post' statement", () => {
			cy.findByRole('heading', {
				name: '게시글이 없습니다.',
			}).should('exist');
		});
	});

	describe('Login', () => {
		const clickLoginButton = () => {
			const loginButton = cy.findByRole('button', {
				name: '회원가입/로그인',
			});

			loginButton.click();
		};

		const clickSubmitButton = () => {
			const submitButton = cy.findByRole('button', {
				name: '로그인',
			});

			submitButton.click();
		};

		beforeEach(() => {
			cy.visit('/');
		});

		it("Show login modal when click 'login/signup' button", () => {
			clickLoginButton();

			cy.findByRole('heading', {
				name: '로그인',
			}).should('exist');
		});

		it('Show user name and logout button when success to login', () => {
			cy.intercept(
				{
					method: 'GET',
					url: `${API_HOST}/user/signup`,
				},
				{
					body: {
						statusCode: 201,
					},
				},
			).as('Signup');

			cy.intercept(
				{
					method: 'GET',
					url: `${API_HOST}/user/login`,
				},
				{
					body: {
						statusCode: 200,
					},
				},
			).as('Login');

			clickLoginButton();

			const idInput = cy.findByPlaceholderText('id');
			idInput.type('test12');

			const passwordInput = cy.findByPlaceholderText('password');
			passwordInput.type('test1234');

			clickSubmitButton();

			cy.findByText('test12').should('exist');

			cy.findByRole('button', {
				name: '로그아웃',
			}).should('exist');

			cy.findByText('로그인에 성공했습니다.').should('exist');
		});
	});
});
