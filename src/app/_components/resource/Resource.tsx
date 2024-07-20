import { FC } from 'react';
import Link from 'next/link';
import IResource from '@/types/Resource';
import { RxCaretRight } from 'react-icons/rx';

interface Props {
	resource: IResource;
}

const Resource: FC<Props> = ({ resource }) => {
	return (
		<div className="flex flex-col justify-between rounded-lg bg-bg p-10 text-left">
			<div>
				<div className="flex items-center gap-2">
					<div className="scale-150">{resource.icon}</div>

					<h3 className="text-2xl font-bold">{resource.name}</h3>
				</div>

				<p className="my-5">{resource.descr}</p>
			</div>

			<div className="animation_underline_center flex max-w-max items-center">
				<Link href={resource.linkUrl} target="_blank" className="font-medium">
					{resource.linkLabel}
				</Link>

				<div className="scale-150 cursor-pointer">
					<RxCaretRight className="transition duration-200 ease-linear" />
				</div>
			</div>
		</div>
	);
};

export default Resource;
