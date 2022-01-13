import React from 'react';
import { LoginFormContainer, LoginFormInput } from './styled';
import useLoginForm from '@hooks/useLoginForm';
import useInput from '@hooks/useInput';

type Props = {
	closeLoginModal: () => void;
};

const LoginForm = ({ closeLoginModal }: Props) => {
	const [id, handleChangeId] = useInput('');

	const [password, handleChangePassword] = useInput('');

	const [isIdValid, isPasswordValid, isFormSubmitted, submitLoginForm] = useLoginForm({
		id,
		password,
		closeLoginModal,
	});

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
