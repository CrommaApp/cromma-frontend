import React from 'react';
import { Link } from 'react-router-dom';
import useLogout from '@hooks/useLogout';
import { LayoutMenu, LayoutNavigation, LayoutUserState } from './styled';

type Props = {
	showLoginModal: () => void;
};

const LayoutLeftMenu = ({ showLoginModal }: Props) => {
	const [user, onLogout] = useLogout();

	return (
		<LayoutMenu>
			<div>
				<LayoutUserState>{user.isLogin ? user.id : '로그인 해주세요'}</LayoutUserState>
				<LayoutNavigation>
					<ul>
						<li>
							<Link to="/">홈</Link>
						</li>
						<li>
							<Link to="/post/upload">게시글 작성</Link>
						</li>
					</ul>
				</LayoutNavigation>
			</div>

			{user.isLogin ? (
				<button type="button" onClick={onLogout}>
					로그아웃
				</button>
			) : (
				<button type="button" onClick={showLoginModal}>
					회원가입/로그인
				</button>
			)}
		</LayoutMenu>
	);
};

export default LayoutLeftMenu;
