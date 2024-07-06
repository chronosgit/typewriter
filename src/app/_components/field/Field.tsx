'use client';

import { FC, useContext } from 'react';
import SessionContext from '@/contexts/session/SessionContext';
import exist from '@/utils/exist';

interface Props {
	sentence: string;
}

const Field: FC<Props> = ({ sentence }) => {
	const sessionCtx = useContext(SessionContext);

	if (!exist(sessionCtx)) {
		throw Error('Field component must use Session context');
	}

	const { startedTyping, curWord, typedWord, oldWords } = sessionCtx!;

	return (
		<div className="relative mx-auto w-10/12 rounded-2xl bg-white py-12 shadow-lg shadow-gray-400">
			<div className="overflow-hidden">
				<p className="translate-x-1/2 overflow-hidden whitespace-nowrap text-3xl font-extralight text-black">
					{sentence}
				</p>
			</div>

			{/* Call to action */}
			<div className="pointer-events-none absolute left-1/2 top-0 z-50 -translate-x-1/2 animate-bounce rounded-md bg-yellow-400 px-2 py-1">
				<div className="relative">
					<p className="text-sm font-light text-black">Start typing</p>

					{/* Acute thingy in the bottom */}
					<div className="absolute top-0 -z-40 size-4 translate-x-7 translate-y-3 rotate-45 bg-yellow-400" />
				</div>
			</div>
		</div>
	);
};

export default Field;
