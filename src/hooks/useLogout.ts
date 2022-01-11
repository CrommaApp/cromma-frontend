import React from 'react';
import AuthService from '@services/auth/auth-service';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { UserState, userState } from '@stores/user';
import { errorStatusState, successStatusState } from '@stores/status';

const authService = new AuthService();

type ReturnTypes = [UserState, () => Promise<void>];

const useLogout = (): ReturnTypes => {
	const [user, setUser] = useRecoilState(userState);

	const setErrorStatus = useSetRecoilState(errorStatusState);
	const setSuccessStatus = useSetRecoilState(successStatusState);

	const onLogout = async () => {
		try {
			const result = await authService.logout();

			if (result.statusCode === 200) {
				setUser((prev) => {
					return {
						...prev,
						isLogin: false,
						id: '',
					};
				});

				setSuccessStatus({ successMessage: result.message });
			}
		} catch (error) {
			setErrorStatus({
				errorMessage: '잠시 후 다시 시도해주세요.',
			});
		}
	};

	return [user, onLogout];
};

export default useLogout;
