import React, { useState } from 'react';

const LoginForm = () => {
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

	const submitLoginForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const result = checkInputValidaton();

		setIsFormSubmitted(true);

		if (result) {
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
		<form onSubmit={submitLoginForm}>
			<ul>
				<li>
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
				</li>

				<li>
					<label htmlFor="login_input_password" className="a11y-hidden">
						Password
					</label>
					<input
						id="login_input_password"
						type="text"
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
				</li>
			</ul>

			<button type="submit">Login</button>
		</form>
	);
};

export default LoginForm;
