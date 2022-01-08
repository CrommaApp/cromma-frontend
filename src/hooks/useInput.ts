import { Dispatch, SetStateAction, useCallback, useState } from 'react';

type Handler = (e: any) => void;
type ReturnTypes<T = any> = [T, Handler];

const useInput = <T = any>(initialValue: T): ReturnTypes<T> => {
	const [value, setValue] = useState(initialValue);
	const handler = useCallback((e) => {
		setValue(e.target.value);
	}, []);

	return [value, handler];
};

export default useInput;
