import { useEffect, useState } from 'react';
import FinishedWord from '@/types/FinishedWord';
import TypedWord from '@/types/TypedWord';
import useTime from './useTime';

interface FieldProps {
	words: string[];
	maxTime: number;
}

const useField = ({ words: initWords, maxTime }: FieldProps) => {
	const { startedTyping, startTyping, remainingTime } = useTime(maxTime);

	const [stats, setStats] = useState({
		wordsPerTime: 0,
		charsPerTime: 0,
		accuracy: 0,
	});

	const [originalWord, setOriginalWord] = useState(initWords[0]);
	const [activeWord, setActiveWord] = useState(initWords[0]);
	const [activeWordRemovedChars, setActiveWordRemovedChars] = useState('');

	// 15 words, first word is future activeWord
	const [wordsQueue, setWordsQueue] = useState(initWords.slice(1));

	const [finishedWords, setFinishedWords] = useState<FinishedWord[]>([]);
	
	const typedWordDefault: TypedWord = { value: '', isCorrect: false };
	const [typedWord, setTypedWord] = useState<TypedWord>(typedWordDefault);

	const updateWordsQueue = () => {
		setWordsQueue(p => p.slice(1));
	};

	const onType = (char: string) => {
		const newTypedWord = typedWord.value + char;

		if(originalWord.startsWith(newTypedWord)) { // Valid typing
			setActiveWordRemovedChars(activeWord[0]);
			setActiveWord(p => {
				console.log(p.slice(1));

				return p.slice(1);
			});

			setTypedWord({
				value: newTypedWord,
				isCorrect: true,
			});
		} else { // Invalid
			setTypedWord({
				value: newTypedWord,
				isCorrect: false,
			});
		}
	};

	const onBackspace = () => {
		const newTypedWord = typedWord.value.slice(0, typedWord.value.length - 1);

		if(originalWord.startsWith(newTypedWord)) { // Valid typing
			setActiveWordRemovedChars(activeWord[0]);
			setActiveWord(p => p);

			setTypedWord({
				value: newTypedWord,
				isCorrect: true,
			});
		} else { // Invalid
			setTypedWord({
				value: newTypedWord,
				isCorrect: false,
			});
		}
	};

	const onComplete = () => {
		if(!startedTyping) {
			startTyping();

			document.getElementById('field_cursor')?.focus();
			return;
		}

		if(typedWord.value.length === 0) {
			return;
		}

		// Do we need to wait until queue gets updated?
		setActiveWord(wordsQueue[0]);
		setOriginalWord(wordsQueue[0]);

		updateWordsQueue();

		setFinishedWords(p => {
			return [...p, typedWord]
		});

		setTypedWord(typedWordDefault);
	};

	useEffect(() => {
		console.log(startedTyping);
	}, [startedTyping]);

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
