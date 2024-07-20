import { useState } from 'react';

const useTime = (maxTime: number) => {
	const [startedTyping, setStartedTyping] = useState(false);
	const [remainingTime, setRemainingTime] = useState(maxTime);

	return { startedTyping, remainingTime };
};

export default useTime;
