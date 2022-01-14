import React, { useState } from 'react';
import AuthService from '@services/auth/auth-service';
import { errorStatusState, successStatusState } from '@stores/status';
import { userState } from '@stores/user';
import { useSetRecoilState } from 'recoil';
import {
	RESPONSE_STATUS_403,
	RESPONSE_STATUS_401,
	RESPONSE_STATUS_200,
	RESPONSE_STATUS_201,
	BASIC_ERROR_MESSAGE,
} from '@constants/api';

const authService = new AuthService();

type LoginFormInputs = {
	id: string;
	password: string;
	closeLoginModal: () => void;
};

type ReturnType = [boolean, boolean, boolean, (e: React.FormEvent<HTMLFormElement>) => Promise<void>];

const useLoginForm = ({ id, password, closeLoginModal }: LoginFormInputs): ReturnType => {
	const [isIdValid, setIsIdValid] = useState(false);
	const [isPasswordValid, setIsPasswordValid] = useState(false);

	const [isFormSubmitted, setIsFormSubmitted] = useState(false);

	const setUser = useSetRecoilState(userState);
	const setErrorStatus = useSetRecoilState(errorStatusState);
	const setSuccessStatus = useSetRecoilState(successStatusState);

	const login = async () => {
		try {
			const { statusCode, message } = await authService.login({
				userId: id,
				password,
			});

			if (statusCode === RESPONSE_STATUS_200) {
				setUser((prev) => {
					return {
						...prev,
						isLogin: true,
						id: id,
					};
				});

				setSuccessStatus({ successMessage: message });

				closeLoginModal();
			}
		} catch (error: any) {
			if (error.response.data.statusCode === RESPONSE_STATUS_401) {
				setErrorStatus({
					errorMessage: error.response.data.message,
				});
			} else {
				setErrorStatus({
					errorMessage: BASIC_ERROR_MESSAGE,
				});
			}
		}
	};

	const checkInputValidaton = () => {
		const regExp = /^[A-Za-z0-9+]{4,10}$/;

		if (regExp.test(id)) {
			setIsIdValid(true);
		}

		if (regExp.test(password)) {
			setIsPasswordValid(true);
		}

		if (!regExp.test(id) || !regExp.test(password)) return false;

		return true;
	};

	const submitLoginForm = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const validationCheckResult = checkInputValidaton();

		setIsFormSubmitted(true);

		if (validationCheckResult) {
			try {
				const { statusCode } = await authService.signup({
					userId: id,
					password,
				});

				if (statusCode === RESPONSE_STATUS_201) {
					await login();
				}
			} catch (error: any) {
				if (error.response.data.statusCode === RESPONSE_STATUS_403) {
					await login();
				} else {
					setErrorStatus({
						errorMessage: BASIC_ERROR_MESSAGE,
					});
				}
			}
		}
	};

	return [isIdValid, isPasswordValid, isFormSubmitted, submitLoginForm];
};

export default useLoginForm;
