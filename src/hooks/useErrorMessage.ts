import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { errorStatusState } from '@stores/status';

const useErrorMessage = () => {
	const [errorStatus, setErrorStatus] = useRecoilState(errorStatusState);

	useEffect(() => {
		if (!errorStatus.errorMessage) return;

		const errorTimer = setTimeout(() => {
			setErrorStatus({
				errorMessage: '',
			});
		}, 3000);

		return () => {
			clearTimeout(errorTimer);
		};
	}, [errorStatus]);

	return errorStatus.errorMessage;
};

export default useErrorMessage;
