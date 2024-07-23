'use client';

import { useState } from 'react';

const useTime = (maxTime: number) => {
	const [startedTyping, setStartedTyping] = useState(false);
	const [remainingTime, setRemainingTime] = useState(maxTime);

	const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

	const startTimer = () => {
		if(timer) {
			clearInterval(timer);
		}

		const newTimer = setInterval(() => {
			console.log(remainingTime);

			setRemainingTime(p => p - 1);
		}, 1000);

		setTimer(newTimer);
	};

	const stopTimer = () => {
		if(timer) {
			clearInterval(timer);
			setTimer(null);
		}
	};

	const startTyping = () => {
		setStartedTyping(true);
		
		startTimer();
	};

	return { startedTyping, startTyping, remainingTime, startTimer, stopTimer };
};

export default useTime;
