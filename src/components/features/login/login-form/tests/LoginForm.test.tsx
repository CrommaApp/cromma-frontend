import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import LoginForm from '@components/features/login/login-form';

describe('LoginForm', () => {
	let closeLoginModal: () => void;

	beforeEach(() => {
		closeLoginModal = jest.fn();

		render(<LoginForm closeLoginModal={closeLoginModal} />);
	});

	it('Snapshot', () => {
		const component = renderer.create(<LoginForm closeLoginModal={closeLoginModal} />);
		expect(component.toJSON()).toMatchSnapshot();
	});
});
