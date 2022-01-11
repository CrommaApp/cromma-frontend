import React, { useState } from 'react';
import AuthService from '@services/auth/auth-service';
import { errorStatusState, successStatusState } from '@stores/status';
import { userState } from '@stores/user';
import { useSetRecoilState } from 'recoil';

const authService = new AuthService();

type LoginFormInputs = {
	id: string;
	password: string;
	closeLoginModal: () => void;
};

type ReturnTypes = [boolean, boolean, boolean, (e: React.FormEvent<HTMLFormElement>) => Promise<void>];

const useLoginForm = ({ id, password, closeLoginModal }: LoginFormInputs): ReturnTypes => {
	const [isIdValid, setIsIdValid] = useState(false);
	const [isPasswordValid, setIsPasswordValid] = useState(false);

	const [isFormSubmitted, setIsFormSubmitted] = useState(false);

	const setUser = useSetRecoilState(userState);
	const setErrorStatus = useSetRecoilState(errorStatusState);
	const setSuccessStatus = useSetRecoilState(successStatusState);

	const login = async () => {
		try {
			const result = await authService.login({
				userId: id,
				password,
			});

			if (result.statusCode === 200) {
				setUser((prev) => {
					return {
						...prev,
						isLogin: true,
						id: id,
					};
				});

				setSuccessStatus({ successMessage: result.message });

				closeLoginModal();
			}
		} catch (error: any) {
			setErrorStatus({ errorMessage: error.response?.data?.message || '잠시 후 다시 시도해주세요.' });
		}
	};

	const checkInputValidaton = () => {
		if (!id.trim() || !password.trim()) return false;

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

		const result = checkInputValidaton();

		setIsFormSubmitted(true);

		if (result) {
			try {
				const result = await authService.signup({
					userId: id,
					password,
				});

				if (result.statusCode === 201) {
					await login();
				}
			} catch (error: any) {
				if (error.response.data.message === '이미 사용 중인 아이디입니다.') {
					await login();
				}
			}
		}
	};

	return [isIdValid, isPasswordValid, isFormSubmitted, submitLoginForm];
};

export default useLoginForm;
