'use client';

import { createContext, FC, ReactElement, useEffect, useState } from 'react';
import Session from '@/types/Session';
import useField from '@/app/_hooks/useField';
import sentences from '@/app/_utils/sentences';
import getRandomItemFromArray from '@/utils/getRandomItemFromArray';

interface ProviderProps {
	children: ReactElement;
}

const SessionContext = createContext<Session | null>(null);

const SessionContextProvider: FC<ProviderProps> = ({ children, }) => {
	const [words, setWords] = useState<string[]>([]);

	useEffect(() => {
		const splittedWords = getRandomItemFromArray(sentences).split(' ');

		setWords(splittedWords);
	}, []);

	const {
		wordsQueue,
		startedTyping,
		remainingTime,
		stats,
		activeWord,
		activeWordRemovedPart,
		typedWord,
		finishedWords,
		onComplete,
		onType,
		onBackspace,
	} = useField({ words, maxTime: 60 });

	return (
		<SessionContext.Provider
			value={{
				words: wordsQueue,
				startedTyping,
				remainingTime,
				stats,
				activeWord,
				activeWordRemovedPart,
				typedWord,
				finishedWords,
				onComplete,
				onType,
				onBackspace,
			}}
		>
			{children}
		</SessionContext.Provider>
	);
};

export { SessionContextProvider };
export default SessionContext;