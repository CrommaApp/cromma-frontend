import React, { useState } from 'react';
import AuthService from '@services/auth/auth-service';
import { errorStatusState, successStatusState } from '@stores/status';
import { userState } from '@stores/user';
import { useSetRecoilState } from 'recoil';
import { LoginFormContainer, LoginFormInput } from './styled';

type Props = {
	authService: AuthService;
	closeLoginModal: () => void;
};

const LoginForm = ({ authService, closeLoginModal }: Props) => {
	const [id, setId] = useState('');
	const handleChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
		setId(e.target.value);
	};

	const [password, setPassword] = useState('');
	const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

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

	return (
		<LoginFormContainer onSubmit={submitLoginForm}>
			<ul>
				<LoginFormInput>
					<label htmlFor="login_input_id" className="a11y-hidden">
						ID
					</label>
					<input
						id="login_input_id"
						type="text"
						placeholder="id"
						value={id}
						onChange={handleChangeId}
						aria-required="true"
						aria-invalid={!isIdValid && isFormSubmitted}
						aria-errormessage="id_error_msg"
					/>
					{!isIdValid && isFormSubmitted && (
						<p id="id_error_msg" role="alert" aria-live="assertive">
							아이디는 4글자 이상 10글자 이하의 영어와 숫자 조합이어야 합니다.
						</p>
					)}
				</LoginFormInput>

				<LoginFormInput>
					<label htmlFor="login_input_password" className="a11y-hidden">
						Password
					</label>
					<input
						id="login_input_password"
						type="password"
						placeholder="passowrd"
						value={password}
						onChange={handleChangePassword}
						aria-required="true"
						aria-invalid={!isPasswordValid && isFormSubmitted}
						aria-errormessage="password_error_msg"
					/>
					{!isPasswordValid && isFormSubmitted && (
						<p id="password_error_msg" role="alert" aria-live="assertive">
							비밀번호는 4글자 이상 10글자 이하의 영어와 숫자 조합이어야 합니다.
						</p>
					)}
				</LoginFormInput>
			</ul>

			<button type="submit">로그인</button>
		</LoginFormContainer>
	);
};

export default LoginForm;
