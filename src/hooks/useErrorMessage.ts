import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { errorStatusState } from '@stores/status';
import { ALERT_TIME_OUT } from '@constants/alert';

const useErrorMessage = () => {
	const [errorStatus, setErrorStatus] = useRecoilState(errorStatusState);

	useEffect(() => {
		if (!errorStatus.errorMessage) return;

		const errorTimer = setTimeout(() => {
			setErrorStatus({
				errorMessage: '',
			});
		}, ALERT_TIME_OUT);

		return () => {
			clearTimeout(errorTimer);
		};
	}, [errorStatus]);

	return errorStatus.errorMessage;
};

export default useErrorMessage;
