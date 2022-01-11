import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { successStatusState } from '@stores/status';

const useSuccessMessage = () => {
	const [successStatus, setSuccessStatus] = useRecoilState(successStatusState);

	useEffect(() => {
		if (!successStatus.successMessage) return;

		const successTimer = setTimeout(() => {
			setSuccessStatus({
				successMessage: '',
			});
		}, 3000);

		return () => {
			clearTimeout(successTimer);
		};
	}, [successStatus]);

	return successStatus.successMessage;
};

export default useSuccessMessage;
