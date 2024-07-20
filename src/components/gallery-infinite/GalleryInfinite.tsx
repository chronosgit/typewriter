import { FC, ReactElement } from 'react';

interface Props {
	children: ReactElement[];
}

const GalleryInfinite: FC<Props> = ({ children }) => {
	return (
		<div className="whitespace-nowrap">
			<div className="flex overflow-hidden">
				<div className="flex w-fit flex-shrink-0 animate-gallery-scroll justify-between">
					{children}
				</div>

				<div className="flex w-fit flex-shrink-0 animate-gallery-scroll justify-between">
					{children}
				</div>
			</div>
		</div>
	);
};

export default GalleryInfinite;
