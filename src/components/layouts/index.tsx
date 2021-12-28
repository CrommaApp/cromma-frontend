import React, { ReactNode } from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;

	& > main {
		position: relative;
		width: 75%;
		height: 100%;
		background-color: #eeeeee;

		@media screen and (max-width: 768px) {
			width: 100%;
		}
	}
`;

const LayoutLeftMenu = styled.div`
	width: 25%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background-color: #dddddd;
	padding: 5% 0;
	font-size: 1rem;
	color: #aaaaaa;

	& > p {
		width: 100%;
		background-color: white;
		margin: 0;
		padding: 12% 0;
		text-align: center;
	}

	& > button {
		font-size: 1rem;
		color: #aaaaaa;
		background-color: transparent;
	}

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

type Props = {
	children: ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<LayoutContainer>
			<LayoutLeftMenu>
				<p>Please Login</p>
				<button type="button">Sign In</button>
			</LayoutLeftMenu>
			<main>{children}</main>
		</LayoutContainer>
	);
};

export default Layout;
