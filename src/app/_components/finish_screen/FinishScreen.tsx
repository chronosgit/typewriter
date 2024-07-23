'use client';

import { useContext } from 'react';
import SessionContext from '@/contexts/session/SessionContext';
import exist from '@/utils/exist';
import getRankFromStats from '@/app/_utils/getRankFromStats';

const FinishScreen = () => {
	const sessionCtx = useContext(SessionContext);

	if (!exist(sessionCtx)) {
		throw Error('FinishScreen component must consume SessionContext');
	}

	const { stats, resetSession, isFinishScreenSeen } = sessionCtx!;
	const { wordsPerTime: WPM, charsPerTime: CPM, accuracy: ACC } = stats;

	const rank = getRankFromStats(stats);

	if (!isFinishScreenSeen) {
		return <></>;
	}

	return (
		<div className="fixed inset-0 z-50 bg-black bg-opacity-40 shadow-lg">
			<div className="relative size-full">
				<div className="absolute left-1/2 top-1/2 w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-zinc-50 px-6 pb-6 pt-12 shadow-lg">
					<h2 className="text-2xl font-bold text-black">You're a {rank}.</h2>

					<p className="mt-2 text-black">
						You type with the speed of{' '}
						<span className="text-lg font-medium text-black">
							{WPM} WPM ({CPM} CPM).
						</span>{' '}
						Your accuracy was{' '}
						<span className="text-lg font-medium text-black">{ACC}%.</span> You
						can do better!
					</p>

					<div className="aling-center flex gap-4">
						<button
							className="mt-4 cursor-pointer rounded-lg border-[1px] border-black bg-none px-4 py-2 font-medium text-black transition-colors hover:bg-black hover:text-white"
							onClick={resetSession}
						>
							Try again
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FinishScreen;
