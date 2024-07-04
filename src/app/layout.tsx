import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/header/Header';
import './globals.css';
import { ThemeContextProvider } from '@/contexts/theme/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

const metadata: Metadata = {
	title: 'Typewriter',
	description:
		'Web-application for assisting in increasing typing speed and accurasy',
	authors: {
		name: 'chronosgit',
		url: 'https://github.com/chronosgit',
	},
	keywords: [
		'typing',
		'typing speed',
		'speed',
		'typing accuracy',
		'typewriter',
	],
};

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeContextProvider>
					<Header />

					{children}
				</ThemeContextProvider>
			</body>
		</html>
	);
};

export { metadata };
export default RootLayout;
