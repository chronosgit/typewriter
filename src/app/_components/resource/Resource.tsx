import { FC } from 'react';
import Link from 'next/link';
import IResource from '@/types/Resource';
import { RxCaretRight } from 'react-icons/rx';

interface Props {
	resource: IResource;
}

const Resource: FC<Props> = ({ resource }) => {
	return (
		<div className="max-w-max p-10 bg-bg rounded-lg text-left">
			<div className="flex items-center gap-2">
				<div className="scale-150">{resource.icon}</div>

				<h3 className="text-2xl font-bold">{resource.name}</h3>
			</div>

			<p className="my-5">{resource.descr}</p>

			<div className="underline-animation-center max-w-max flex items-center">
				<Link href={resource.linkUrl} className="font-medium">
					{resource.linkLabel}
				</Link>

				<div className="scale-150 cursor-pointer">
					<RxCaretRight className="transition ease-linear duration-200" />
				</div>
			</div>
		</div>
	);
};

export default Resource;