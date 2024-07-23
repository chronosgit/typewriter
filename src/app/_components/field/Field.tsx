'use client';

import { useContext } from 'react';
import CallToAction from '@/app/_components/call-to-action/CallToAction';
import Cursor from '@/app/_components/cursor/Cursor';
import SessionContext from '@/contexts/session/SessionContext';
import exist from '@/utils/exist';
import useKeyboard from '@/app/_hooks/useKeyboard';

const Field = () => {
	const sessionCtx = useContext(SessionContext);

	if (!exist(sessionCtx)) {
		throw Error('Field component must use Session context');
	}

	const { activeWord, activeWordRemovedPart, finishedWords, typedWord, words, startedTyping, onType, onBackspace, onComplete } = sessionCtx!;

	useKeyboard({onType, onBackspace, onComplete, startedTyping, activeWord, activeWordRemovedPart,  typedWord });

	return (
		<div className="mx-auto w-10/12 rounded-2xl bg-white py-12 shadow-lg shadow-gray-400">
			<div className="grid grid-cols-2">
				{/* Finished words */}
				<div className="flex justify-end gap-2 pr-2 overflow-hidden">
					<div className="flex items-center gap-2 whitespace-nowrap">
						{finishedWords.map((finishedWord, i) => {
							return (
								<p
									key={finishedWord.value + i.toString()}
									className={`text-3xl font-extralight text-stone-500 decoration-stone-500 ${!finishedWord.isCorrect && 'line-through'} `}
								>
									{finishedWord.value}
								</p>
							);
						})}
					</div>

					{typedWord.isCorrect ? (
							<p className="text-3xl text-blue-700">
								{typedWord.value}
							</p>
						) : (
							<p className="text-3xl text-blue-700 line-through decoration-blue-900">
								{typedWord.value}
							</p>
						)}
				</div>

				{/* Words to type */}
				<div className="relative">
					<div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
						<p className="text-3xl font-light text-black">
							{activeWord}
						</p>

						{words.map((word, i) => {
							return (
								<p
									key={word + i.toString()}
									className="text-3xl font-light text-black"
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

						<input 
							id="field_cursor"
							className='opacity-0 size-0.5'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Field;
