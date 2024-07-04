'use client';

import { CSSProperties, useContext } from 'react';
import Sun from '@/components/sun/Sun';
import Moon from '@/components/moon/Moon';
import ThemeContext from '@/contexts/theme/ThemeContext';
import exist from '@/utils/exist';

const ThemeSwitch = () => {
	const themeCtx = useContext(ThemeContext);

	if (!exist(themeCtx)) {
		throw Error('ThemeSwitch component must use ThemeContext');
	}

	const isDark = themeCtx?.isDark;
	const toggleTheme = themeCtx?.toggleTheme;

	const skyBgStyle: CSSProperties = {
		backgroundImage: 'url()',
	};

	return (
		<div
			className={`
				relative w-14 h-7 
				rounded-2xl shadow-md cursor-pointer
				${isDark ? 'bg-sky-dark' : 'bg-sky-light'} 
				bg-cover bg-no-repeat
			`}
			onClick={toggleTheme}
		>
			{/* Cover circle */}
			<div
				className={`
				absolute top-1/2 -translate-y-1/2 
				w-5 h-5 rounded-full bg-slate-100
				transition-all-200-ease
				${isDark ? 'translate-x-8' : 'translate-x-1'}
			`}
			/>

			{/* Active theme indicator */}
			<div
				className={`
					absolute top-1/2 -translate-y-1/2
					w-5 h-5
					${isDark ? 'translate-x-1' : 'translate-x-8'}
			`}
			>
				{isDark ? <Moon /> : <Sun />}
			</div>
		</div>
	);
};

export default ThemeSwitch;
