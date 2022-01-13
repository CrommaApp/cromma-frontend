import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import PostUploadForm from '@components/features/upload/post-upload-form';
import { BrowserRouter } from 'react-router-dom';

const mockedSumbitUploadPost = jest.fn();

jest.mock('@hooks/useUploadPost', () => ({
	__esModule: true,
	default: () => mockedSumbitUploadPost,
}));

describe('PostUploadForm Component', () => {
	const enterTitle = (title: string) => {
		const titleInput = screen.getByLabelText('제목');

		userEvent.type(titleInput, title);
	};

	const expectTitle = (expectedTitle: string) => {
		const titleInput = screen.getByLabelText('제목');

		expect(titleInput).toHaveValue(expectedTitle);
	};

	const enterContent = (content: string) => {
		const contentInput = screen.getByLabelText('내용');

		userEvent.type(contentInput, content);
	};

	const expectContent = (expectedContent: string) => {
		const contentInput = screen.getByLabelText('내용');

		expect(contentInput).toHaveValue(expectedContent);
	};

	const clickSubmitButton = () => {
		const submitButton = screen.getByRole('button', {
			name: '작성',
		});

		userEvent.click(submitButton);
	};

	beforeEach(() => {
		render(
			<BrowserRouter>
				<PostUploadForm />
			</BrowserRouter>,
		);
	});

	it('Snapshot', () => {
		const component = renderer.create(
			<BrowserRouter>
				<PostUploadForm />
			</BrowserRouter>,
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it("Init title and contnet with ''", () => {
		expectTitle('');

		expectContent('');
	});

	it('Change value when enter input', () => {
		enterTitle('title');

		expectTitle('title');

		enterContent('content');

		expectContent('content');
	});

	describe('All Inputs must be entered to submit form', () => {
		it('Title must be entered', () => {
			enterTitle('title');

			clickSubmitButton();

			expect(mockedSumbitUploadPost).not.toHaveBeenCalled();
		});

		it('Content must be entered', () => {
			enterContent('content');

			clickSubmitButton();

			expect(mockedSumbitUploadPost).not.toHaveBeenCalled();
		});
	});

	it('Call sumbitUploadForm() when submit upload form', () => {
		enterTitle('title');

		enterContent('content');

		clickSubmitButton();

		expect(mockedSumbitUploadPost).toHaveBeenCalled();
	});
});
