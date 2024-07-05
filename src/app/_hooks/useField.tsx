import { useState } from 'react';
import Stats from '@/types/Stats';
import OldWord from '@/types/OldWord';

const useField = (words: string[], maxTime: number) => {
	const [isStarted, setStarted] = useState(false);
	const [timerTime, setTimerTime] = useState(maxTime);

	const [curWord, setCurWord] = useState(words[0]);
	const [typedWord, setTypedWord] = useState('');

	const [oldWords, setOldWords] = useState<OldWord[]>([]);

	const [stats, setStats] = useState<Stats>({
		wordsPerMin: 0,
		charsPerMin: 0,
		accuracy: 0,
	});

	return {
		startedTyping: isStarted,
		remainingTime: timerTime,
		curWord,
		oldWords,
		typedWord,
		stats,
	};
};

export default useField;
