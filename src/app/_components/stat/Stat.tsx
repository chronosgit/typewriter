import { FC } from 'react';

interface Props {
	value: number;
	label: string;
}

const Stat: FC<Props> = ({ value, label }) => {
	return (
		<div className="flex flex-col items-center">
			<div className="mb-2 rounded-3xl bg-bg-alt px-8 py-6">
				<p className="text-4xl font-extrabold text-primary-alt">{value}</p>
			</div>

			<p className="text-sm font-extralight">{label}</p>
		</div>
	);
};

export default Stat;
