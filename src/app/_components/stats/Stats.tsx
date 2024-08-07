'use client';

import { useContext } from 'react';
import Stat from '@/app/_components/stat/Stat';
import SessionContext from '@/contexts/session/SessionContext';
import exist from '@/utils/exist';

const Stats = () => {
	const sessionCtx = useContext(SessionContext);

	if (!exist(sessionCtx)) {
		throw Error('Stats component must use Session context');
	}

	const { wordsPerTime, charsPerTime, accuracy } = sessionCtx?.stats!;

	return (
		<div className="flex items-center gap-6">
			<Stat value={wordsPerTime} label="words/min" />

			<Stat value={charsPerTime} label="chars/min" />

			<Stat value={accuracy} label="% accuracy" />
		</div>
	);
};

export default Stats;
