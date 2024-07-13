'use client';

import { createContext, FC, ReactElement } from 'react';
import Session from '@/types/Session';
import useField from '@/app/_hooks/useField';
import sentences from '@/app/_utils/sentences';
import getRandomItemFromArray from '@/utils/getRandomItemFromArray';

interface ProviderProps {
	children: ReactElement;
}

const SessionContext = createContext<Session | null>(null);

const SessionContextProvider: FC<ProviderProps> = ({ children }) => {
	const sentence = getRandomItemFromArray(sentences);
	const splittedWords = sentence.split(' ');

	const {
		startedTyping,
		remainingTime,
		curWordId,
		typedWord,
		stats,
		oldWords,
		words,
		onComplete,
		onType,
		onBackspace,
	} = useField({ words: splittedWords, maxTime: 60 });

	return (
		<SessionContext.Provider
			value={{
				startedTyping,
				remainingTime,
				curWordId,
				typedWord,
				stats,
				oldWords,
				words,
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
