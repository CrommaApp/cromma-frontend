import React from 'react';
import AuthService from '@services/auth/auth-service';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { UserState, userState } from '@stores/user';
import { errorStatusState, successStatusState } from '@stores/status';
import { BASIC_ERROR_MESSAGE, RESPONSE_STATUS_200 } from '@constants/api';

const authService = new AuthService();

type ReturnType = [UserState, () => Promise<void>];

const useLogout = (): ReturnType => {
	const [user, setUser] = useRecoilState(userState);

	const setErrorStatus = useSetRecoilState(errorStatusState);
	const setSuccessStatus = useSetRecoilState(successStatusState);

	const onLogout = async () => {
		try {
			const { statusCode, message } = await authService.logout();

			if (statusCode === RESPONSE_STATUS_200) {
				setUser((prev) => {
					return {
						...prev,
						isLogin: false,
						id: '',
					};
				});

				setSuccessStatus({ successMessage: message });
			}
		} catch (error) {
			setErrorStatus({
				errorMessage: BASIC_ERROR_MESSAGE,
			});
		}
	};

	return [user, onLogout];
};

export default useLogout;
