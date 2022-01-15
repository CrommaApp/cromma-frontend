import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import LoginForm from '@components/features/Login/LoginForm';
import * as useLoginForm from '@hooks/useLoginForm';

type ReturnType = [boolean, boolean, boolean, (e: React.FormEvent<HTMLFormElement>) => Promise<void>];
describe('LoginForm Component', () => {
	const mockedCloseLoginModal = jest.fn();

	const enterId = (id: string) => {
		const idInput = screen.getByPlaceholderText('id');

		userEvent.type(idInput, id);
	};

	const expectId = (expectedId: string) => {
		const idInput = screen.getByPlaceholderText('id');

		expect(idInput).toHaveValue(expectedId);
	};

	const enterPassword = (password: string) => {
		const passwordInput = screen.getByPlaceholderText('password');

		userEvent.type(passwordInput, password);
	};

	const expectPassword = (expectedPassword: string) => {
		const passwordInput = screen.getByPlaceholderText('password');

		expect(passwordInput).toHaveValue(expectedPassword);
	};

	const clickSubmitButton = () => {
		const submitButton = screen.getByRole('button', {
			name: '로그인',
		});

		userEvent.click(submitButton);
	};

	const checkIsIdInputNotValid = (id: string) => {
		enterId(id);

		clickSubmitButton();

		expect(screen.getByText('아이디는 4글자 이상 10글자 이하의 영어와 숫자 조합이어야 합니다.')).toBeInTheDocument();
	};

	const checkIsPasswordInputNotValid = (password: string) => {
		enterPassword(password);

		clickSubmitButton();

		expect(screen.getByText('비밀번호는 4글자 이상 10글자 이하의 영어와 숫자 조합이어야 합니다.')).toBeInTheDocument();
	};

	const mockedSubmitLoginForm = jest.fn();

	const spyOnUseGetAllPosts = (returnData: ReturnType) => {
		const mockedUseLoginForm = jest.spyOn(useLoginForm, 'default');
		mockedUseLoginForm.mockImplementation(() => returnData);

		render(<LoginForm closeLoginModal={mockedCloseLoginModal} />);
	};

	it('Snapshot', () => {
		const component = renderer.create(<LoginForm closeLoginModal={mockedCloseLoginModal} />);
		expect(component.toJSON()).toMatchSnapshot();
	});

	describe('Init and change inputs', () => {
		beforeEach(() => {
			render(<LoginForm closeLoginModal={mockedCloseLoginModal} />);
		});

		it("Init ID and password with ''", () => {
			expectId('');

			expectPassword('');
		});

		it('Change value when enter input', () => {
			enterId('test@gmail.com');

			expectId('test@gmail.com');

			enterPassword('test1234');

			expectPassword('test1234');
		});
	});

	describe('Show alert message when ID or password is not valid', () => {
		beforeEach(() => {
			render(<LoginForm closeLoginModal={mockedCloseLoginModal} />);
		});

		it('ID must be at least 4 letters and less than 10 letters', () => {
			checkIsIdInputNotValid('tes');

			checkIsIdInputNotValid('testtesttest');
		});

		it('ID must consist of English or numbers', () => {
			checkIsIdInputNotValid('test!!');
		});

		it('Password must be at least 4 letters and less than 10 letters', () => {
			checkIsPasswordInputNotValid('tes');

			checkIsPasswordInputNotValid('testtesttest');
		});

		it('Password must consist of English or numbers', () => {
			checkIsPasswordInputNotValid('test!!');
		});
	});

	it('Call submitLoginForm() when click submit button', () => {
		spyOnUseGetAllPosts([true, true, true, mockedSubmitLoginForm]);

		clickSubmitButton();

		expect(mockedSubmitLoginForm).toHaveBeenCalled();
	});
});
