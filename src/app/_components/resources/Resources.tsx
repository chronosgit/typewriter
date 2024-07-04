'use client';

import { useContext } from 'react';
import Wave1 from '@/components/waves/wave-1/Wave1';
import ThemeContext from '@/contexts/theme/ThemeContext';
import exist from '@/utils/exist';

const Resources = () => {
	const themeCtx = useContext(ThemeContext);

	if (!exist(themeCtx)) {
		throw Error('Resources section component must use ThemeContext');
	}

	return (
		<section className="relative py-12 bg-bg-alt">
			<Wave1 />

			<div className="max-w-screen-xl mx-auto text-center">
				<h2 className="mb-6 text-3xl font-bold text-primary-alt">
					Universe of great insights
				</h2>

				<p className="text-lg text-primary-alt">
					Typing skills? Check. Take the next step and make your online
					communication outstanding.
				</p>
			</div>
		</section>
	);
};

export default Resources;
