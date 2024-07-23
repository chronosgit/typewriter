'use client';

import { useEffect, useState } from 'react';

const useTime = (maxTime: number) => {
	const [startedTyping, setStartedTyping] = useState(false);
	const [remainingTime, setRemainingTime] = useState(maxTime);
	const [isTimeOver, setTimeOver] = useState<Boolean | null>(null);

	const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

	const startTimer = () => {
		if (timer) {
			clearInterval(timer);
		}

		const newTimer = setInterval(() => setRemainingTime(p => p - 1), 1000);

		setTimer(newTimer);
	};

	const stopTimer = () => {
		if (timer) {
			clearInterval(timer);
			setTimer(null);
		}
	};

	const startTyping = () => {
		setStartedTyping(true);
		startTimer();
		setTimeOver(false);
	};

	useEffect(() => {
		if (remainingTime === 0) {
			stopTimer();
			setTimeOver(true);
		}
	}, [remainingTime]);

	return {
		startedTyping,
		startTyping,
		remainingTime,
		startTimer,
		isTimeOver,
		setStartedTyping,
		setRemainingTime,
	};
};

export default useTime;
