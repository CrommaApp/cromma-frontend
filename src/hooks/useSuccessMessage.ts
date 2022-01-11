import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { successStatusState } from '@stores/status';
import { ALERT_TIME_OUT } from '@constants/alert';

const useSuccessMessage = () => {
	const [successStatus, setSuccessStatus] = useRecoilState(successStatusState);

	useEffect(() => {
		if (!successStatus.successMessage) return;

		const successTimer = setTimeout(() => {
			setSuccessStatus({
				successMessage: '',
			});
		}, ALERT_TIME_OUT);

		return () => {
			clearTimeout(successTimer);
		};
	}, [successStatus]);

	return successStatus.successMessage;
};

export default useSuccessMessage;
