import { FC } from 'react';

interface Props {
	sentence: string;
}

const Field: FC<Props> = ({ sentence }) => {
	return (
		<div className="mx-auto w-10/12 overflow-hidden rounded-2xl bg-white py-20 shadow-lg shadow-gray-400">
			<p className="translate-x-1/2 whitespace-nowrap text-3xl font-extralight text-black">
				{sentence}
			</p>
		</div>
	);
};

export default Field;
