import { FC } from 'react';
import Stat from '@/app/_components/stat/Stat';
import IStats from '@/types/Stats';

const Stats: FC<IStats> = ({ wordsPerMin, charsPerMin, accuracy }) => {
	return (
		<div className="flex items-center gap-6">
			<Stat value={wordsPerMin} label="words/min" />

			<Stat value={charsPerMin} label="chars/min" />

			<Stat value={accuracy} label="% accuracy" />
		</div>
	);
};

export default Stats;
