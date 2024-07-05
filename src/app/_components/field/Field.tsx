import { FC } from 'react';

interface Props {
	sentence: string;
}

const Field: FC<Props> = ({ sentence }) => {
	return (
		<div className="mx-auto w-10/12 overflow-hidden rounded-2xl py-20 shadow-lg shadow-stone-400">
			<p className="translate-x-1/2 whitespace-nowrap text-3xl">
				{sentence}
			</p>
		</div>
	);
};

export default Field;
