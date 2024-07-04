import { useEffect, useState } from 'react';
import Themes from '@/enums/Themes';

type IThemeHook = () => {
	theme: Themes;
	isDark: Boolean;
	toggleTheme: () => void;
};

const useTheme: IThemeHook = () => {
	const [theme, setTheme] = useState<Themes>(Themes.Light);
	const [isDark, setDark] = useState<Boolean>(false);

	const toDark = () => {
		document.body.classList.add('dark-theme');
		setDark(true);
		setTheme(Themes.Dark);
	};

	const toLight = () => {
		document.body.classList.remove('dark-theme');
		setDark(false);
		setTheme(Themes.Light);
	};

	useEffect(() => {
		const onPreferScheme = (e: MediaQueryListEvent) => {
			e.matches ? toDark() : toLight();
		};

		const darkModeMediaQuery = window.matchMedia(
			'(prefers-color-scheme: dark)'
		);

		// Initial change
		darkModeMediaQuery.matches ? toDark() : toLight();

		darkModeMediaQuery.addEventListener('change', onPreferScheme);

		return () => {
			darkModeMediaQuery.removeEventListener('change', onPreferScheme);
		};
	}, []);

	const toggleTheme = () => {
		switch (theme) {
			case Themes.Light:
				toDark();
				break;
			case Themes.Dark:
				toLight();
				break;
		}
	};

	return { theme, isDark, toggleTheme };
};

export default useTheme;
