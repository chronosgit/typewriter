'use client';

import { useContext } from 'react';
import CallToAction from '@/app/_components/call-to-action/CallToAction';
import Cursor from '@/app/_components/cursor/Cursor';
import SessionContext from '@/contexts/session/SessionContext';
import exist from '@/utils/exist';

const Field = () => {
	const sessionCtx = useContext(SessionContext);

	if (!exist(sessionCtx)) {
		throw Error('Field component must use Session context');
	}

	const { words, startedTyping, curWord, typedWord, oldWords } = sessionCtx!;

	return (
		<div className="mx-auto w-10/12 rounded-2xl bg-white py-12 shadow-lg shadow-gray-400">
			<div className="grid grid-cols-2">
				<div className="bg-red-200"></div>

				<div className="relative">
					<div className="flex items-center gap-2 overflow-hidden whitespace-nowrap bg-yellow-100">
						{words.map((word, i) => {
							return (
								<p
									key={word + i.toString()}
									className="text-3xl font-extralight text-black"
								>
									{word}
								</p>
							);
						})}
					</div>

					{
						/* Call to action */
						!startedTyping && (
							<div className="pointer-events-none absolute -left-11 bottom-16">
								<CallToAction text="Start typing" />
							</div>
						)
					}

					<div className="absolute -left-1 top-0 h-full scale-y-125">
						<Cursor />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Field;
