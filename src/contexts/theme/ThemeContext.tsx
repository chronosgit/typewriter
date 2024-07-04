'use client';

import { createContext, FC, ReactNode } from 'react';
import Themes from '@/enums/Themes';
import useTheme from '@/hooks/useTheme';

interface ThemeContext {
	theme: Themes;
	isDark: Boolean;
	toggleTheme: () => void;
}

interface Props {
	children: ReactNode;
}

const ThemeContext = createContext<ThemeContext | null>(null);

const ThemeContextProvider: FC<Props> = ({ children }) => {
	const { theme, isDark, toggleTheme } = useTheme();

	return (
		<ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeContextProvider };
export default ThemeContext;
