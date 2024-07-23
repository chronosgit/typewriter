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

const SessionContextProvider: FC<ProviderProps> = ({ children }) => {
	const [words, setWords] = useState<string[]>([]);

	const {
		stats,
		startedTyping,
		remainingTime,
		wordsQueue,
		finishedWords,
		activeWord,
		activeWordRemovedPart,
		isFinishScreenSeen,
		typedWord,
		completeCalled,
		isTimeOver,
		onType,
		onBackspace,
		resetSession,
		onComplete,
	} = useField({ words });

	useEffect(() => {
		if (isTimeOver === false) {
			return;
		}

		const splittedWords = getRandomItemFromArray(sentences).split(' ');

		setWords(splittedWords);
	}, [isTimeOver]);

	return (
		<SessionContext.Provider
			value={{
				words: wordsQueue,
				startedTyping,
				isTimeOver,
				resetSession,
				remainingTime,
				stats,
				completeCalled,
				isFinishScreenSeen,
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
