'use client'

import { useState } from 'react';

const useTime = (maxTime: number) => {
	const [startedTyping, setStartedTyping] = useState(false);
	const [remainingTime, setRemainingTime] = useState(maxTime);

	const startTyping = () => setStartedTyping(true);

	return { startedTyping, startTyping, remainingTime };
};

export default useTime;
