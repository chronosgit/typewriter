import { FC } from 'react';

interface Props {
	seconds: number;
}

const Timer: FC<Props> = ({ seconds }) => {
	return (
		<div className="flex size-28 flex-col items-center justify-center rounded-full border-4 border-red-500">
			<p className="text-4xl font-extrabold">{seconds}</p>

			<p className="text-sm font-light">seconds</p>
		</div>
	);
};

export default Timer;
