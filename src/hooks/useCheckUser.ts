import React, { useEffect, useState } from 'react';
import AuthService from '@services/auth/auth-service';
import { useSetRecoilState } from 'recoil';
import { userState } from '@stores/user';
import { errorStatusState } from '@stores/status';

const authService = new AuthService();

const useCheckUser = (): boolean => {
	const [isUserChecked, setIsUserChecked] = useState(false);

	const setUser = useSetRecoilState(userState);

	const setErrorStatus = useSetRecoilState(errorStatusState);

	const checkUserState = async () => {
		setIsUserChecked(false);

		try {
			const result = await authService.getMyInfo();

			if (result.data !== null) {
				setUser((prev) => {
					return {
						...prev,
						isLogin: true,
						id: result.data!.userId,
					};
				});
			} else {
				setUser((prev) => {
					return {
						...prev,
						isLogin: false,
						id: '',
					};
				});
			}
		} catch (error) {
			setErrorStatus({
				errorMessage: '내 정보를 불러오는데 실패했습니다.',
			});
		}

		setIsUserChecked(true);
	};

	useEffect(() => {
		checkUserState();
	}, []);

	return isUserChecked;
};

export default useCheckUser;
