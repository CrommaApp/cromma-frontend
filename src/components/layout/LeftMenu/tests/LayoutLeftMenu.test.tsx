import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import LayoutLeftMenu from '@components/layout/LeftMenu';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import * as useLogout from '@hooks/useLogout';
import { UserState } from '@stores/user';

type ReturnType = [UserState, () => Promise<void>];

describe('LayoutLeftMenu Component', () => {
	const showLoginModal = jest.fn();

	const mockedOnLogout = jest.fn();

	const spyOnUseGetAllPosts = (returnData: ReturnType) => {
		const mockedUseLogout = jest.spyOn(useLogout, 'default');
		mockedUseLogout.mockImplementation(() => returnData);

		render(
			<RecoilRoot>
				<BrowserRouter>
					<LayoutLeftMenu showLoginModal={showLoginModal} />
				</BrowserRouter>
			</RecoilRoot>,
		);
	};

	it('Snapshot', () => {
		const component = renderer.create(
			<RecoilRoot>
				<BrowserRouter>
					<LayoutLeftMenu showLoginModal={showLoginModal} />
				</BrowserRouter>
			</RecoilRoot>,
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('Call onLogout() when click logout button', () => {
		spyOnUseGetAllPosts([{ isLogin: true, id: 'test123' }, mockedOnLogout]);

		const logoutButton = screen.getByRole('button', {
			name: '로그아웃',
		});
		userEvent.click(logoutButton);

		expect(mockedOnLogout).toHaveBeenCalled();
	});

	it('Call showLoginModal() when click login button', () => {
		spyOnUseGetAllPosts([{ isLogin: false, id: '' }, mockedOnLogout]);

		const loginButton = screen.getByRole('button', {
			name: '회원가입/로그인',
		});

		userEvent.click(loginButton);

		expect(showLoginModal).toHaveBeenCalled();
	});
});
