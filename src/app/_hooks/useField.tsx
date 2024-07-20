import { useState } from 'react';
import FinishedWord from '@/types/FinishedWord';
import TypedWord from '@/types/TypedWord';
import useTime from './useTime';

interface FieldProps {
	words: string[];
	maxTime: number;
}

const useField = ({ words: initWords, maxTime }: FieldProps) => {
	const { startedTyping, remainingTime } = useTime(maxTime);

	const [stats, setStats] = useState({
		wordsPerTime: 0,
		charsPerTime: 0,
		accuracy: 0,
	});

	// 15 words, first word is future activeWord
	const [wordsQueue, setWordsQueue] = useState(initWords);

	const [finishedWords, setFinishedWords] = useState<FinishedWord[]>([]);

	const [activeWord, setActiveWord] = useState('');

	const typedWordDefault: TypedWord = { value: '', isCorrect: false };
	const [typedWord, setTypedWord] = useState<TypedWord>(typedWordDefault);

	const updateWordsQueue = () => {};

	const onType = (char: string) => {};

	const onBackspace = () => {};

	const onComplete = () => {
		// TODO: Check if we just started
		updateWordsQueue();

		setFinishedWords(p => [...p, typedWord]);

		// Do we need to wait until queue gets updated?
		setActiveWord(wordsQueue[0]);

		setTypedWord(typedWordDefault);
	};

	return {
		stats,
		startedTyping,
		remainingTime,
		wordsQueue,
		finishedWords,
		activeWord,
		typedWord,
		onType,
		onBackspace,
		onComplete,
	};
};

export default useField;
