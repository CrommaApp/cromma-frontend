import AuthService from '@apis/auth/auth-service';
import { userState } from '@stores/user';
import React, { useState } from 'react';
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
						keywords: result.data.Keywords.slice(0, 5),
					};
				});

				alert(result.message);
			}
		} catch (error) {
			console.error(error);
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

					closeLoginModal();
				}
			} catch (error: any) {
				if (error.response.data.message === '이미 사용 중인 아이디입니다.') {
					await login();

					closeLoginModal();
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
							The ID must consist of 4 to 10 letters in English or numbers
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
							The password must consist of 4 to 10 letters in English or numbers
						</p>
					)}
				</LoginFormInput>
			</ul>

			<button type="submit">Login</button>
		</LoginFormContainer>
	);
};

export default LoginForm;
