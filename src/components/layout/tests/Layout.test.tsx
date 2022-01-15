import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Layout from '@components/layout';

jest.mock('@hooks/useErrorMessage', () => ({
	__esModule: true,
	default: () => '다시 시도해주세요.',
}));

jest.mock('@hooks/useSuccessMessage', () => ({
	__esModule: true,
	default: () => '로그인 성공',
}));

describe('Layout Component', () => {
	beforeEach(() => {
		render(
			<RecoilRoot>
				<BrowserRouter>
					<Layout>
						<></>
					</Layout>
				</BrowserRouter>
			</RecoilRoot>,
		);
	});

	it('Snapshot', () => {
		const component = renderer.create(
			<RecoilRoot>
				<BrowserRouter>
					<Layout>
						<></>
					</Layout>
				</BrowserRouter>
			</RecoilRoot>,
		);
		expect(component.toJSON()).toMatchSnapshot();
	});
});
