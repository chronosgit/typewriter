import { FC, ReactElement } from 'react';

interface Props {
	children: ReactElement[],
}

const GalleryInfinite: FC<Props> = ({children}) => {

	return (
		<div className="whitespace-nowrap overflow-hidden">
			<div className="flex overflow-x-auto overflow-y-hidden">
				<div className="w-full flex-shrink-0 flex justify-between animate-gallery-scroll">
					{children}
				</div>

				<div className="w-full flex-shrink-0 flex justify-between animate-gallery-scroll">
					{children}
				</div>
			</div>
	</div>
	);
};

export default GalleryInfinite;
