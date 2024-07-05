'use client';

import { useContext } from 'react';
import SessionContext from '@/contexts/session/SessionContext';
import exist from '@/utils/exist';

const Timer = () => {
	const sessionCtx = useContext(SessionContext);

	if (!exist(sessionCtx)) {
		throw Error('Timer component must use Session context');
	}

	const time = sessionCtx?.remainingTime;

	return (
		<div className="flex size-28 flex-col items-center justify-center rounded-full border-4 border-red-500">
			<p className="text-4xl font-extrabold">{time}</p>

			<p className="text-sm font-light">seconds</p>
		</div>
	);
};

export default Timer;
