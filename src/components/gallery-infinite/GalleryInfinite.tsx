import Tech from '@/app/_components/tech/Tech';
import { FC } from 'react';

interface Props {
	items: any[];
	tailwindWrapperRules?: string;
	tailwindChildRules?: string;
}

const GalleryInfinite: FC<Props> = ({
	items,
	tailwindWrapperRules = '',
	tailwindChildRules = '',
}) => {
	return (
		<div className={tailwindWrapperRules}>
			{items.map((i, id) => {
				return (
					<div key={i.id || id} className={tailwindChildRules}>
						<Tech tech={i} />
					</div>
				);
			})}
		</div>
	);
};

export default GalleryInfinite;
