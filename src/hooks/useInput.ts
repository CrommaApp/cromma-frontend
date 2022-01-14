import { useCallback, useState } from 'react';

type Handler = (e: any) => void;
type ReturnType<T = any> = [T, Handler];

const useInput = <T = any>(initialValue: T): ReturnType<T> => {
	const [value, setValue] = useState(initialValue);
	const handler = useCallback((e) => {
		setValue(e.target.value);
	}, []);

	return [value, handler];
};

export default useInput;
