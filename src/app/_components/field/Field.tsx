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

	const {} = sessionCtx!;

	return (
		<div className="mx-auto w-10/12 rounded-2xl bg-white py-12 shadow-lg shadow-gray-400">
			<div className="grid grid-cols-2">
				{/* Finished words */}
				<div className="flex justify-end gap-2 pr-2">
					<div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
						{oldWords.map((oldWord, i) => {
							return (
								<p
									key={oldWord + i.toString()}
									className={`text-3xl font-extralight text-stone-500 decoration-stone-500 ${!oldWord.isCorrect && 'line-through'} `}
								>
									valid
								</p>
							);
						})}
					</div>

					{typedWord.isCorrect ? (
						<p className="text-3xl font-extralight text-blue-700 line-through decoration-blue-900">
							{typedWord.value}
						</p>
					) : (
						<></>
					)}
				</div>

				{/* Words to type */}
				<div className="relative">
					<div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
						{words.map((word, i) => {
							// The first one
							if (i === 0 && typedWord.isCorrect) {
								return (
									<p
										key={word + i.toString()}
										className="text-3xl font-extralight text-black"
									>
										<span className="text-blue-700">
											{word.slice(0, typedWord.value.length)}
										</span>

										{word.slice(typedWord.value.length)}
									</p>
								);
							}

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

					{/* Flickering cursor */}
					<div className="absolute -left-0.5 top-0 h-full scale-y-125">
						<Cursor />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Field;
