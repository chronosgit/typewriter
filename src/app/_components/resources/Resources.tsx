'use client';

import { useContext } from 'react';
import Wave1 from '@/components/waves/wave-1/Wave1';
import Resource from '@/app/_components/resource/Resource';
import ThemeContext from '@/contexts/theme/ThemeContext';
import exist from '@/utils/exist';
import resources from '@/app/_utils/resources';

const Resources = () => {
	const themeCtx = useContext(ThemeContext);

	if (!exist(themeCtx)) {
		throw Error('Resources section component must use ThemeContext');
	}

	return (
		<section className="relative mb-10 py-12 px-2 bg-bg-alt">
			<Wave1 />

			<div className="max-w-screen-xl mx-auto text-center">
				<h2 className="mb-6 text-3xl font-bold text-primary-alt">
					Universe of great insights
				</h2>

				<p className="mb-20 text-lg text-primary-alt">
					Typing skills? Check. Take the next step and look forward to new
					horizons.
				</p>

				<div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
					{resources.map(r => (
						<Resource key={r.id} resource={r} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Resources;
