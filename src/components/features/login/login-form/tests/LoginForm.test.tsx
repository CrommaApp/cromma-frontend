import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import LoginForm from '@components/features/login/login-form';
import AuthService from '@services/auth/auth-service';

describe('LoginForm', () => {
	let authService: AuthService;
	let closeLoginModal: () => void;

	beforeEach(() => {
		authService = new AuthService();
		closeLoginModal = jest.fn();

		render(<LoginForm authService={authService} closeLoginModal={closeLoginModal} />);
	});

	it('Snapshot', () => {
		const component = renderer.create(<LoginForm authService={authService} closeLoginModal={closeLoginModal} />);
		expect(component.toJSON()).toMatchSnapshot();
	});
});
