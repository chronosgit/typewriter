'use client';

import { FC, ReactNode, useContext } from 'react';
import { usePathname } from 'next/navigation';
import { ScaleLoader } from 'react-spinners';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import ThemeContext from '@/contexts/theme/ThemeContext';
import exist from '@/utils/exist';

interface Props {
	children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
	const pathname = usePathname();
	const hasLayout = pathname === '/';

	const themeCtx = useContext(ThemeContext);

	if (!exist(themeCtx)) {
		throw Error('Custom root layout must use theme context');
	}

	if (!hasLayout) {
		return <>{children}</>;
	}

	if (themeCtx?.isPreferReady) {
		return (
			<div className="flex flex-col min-h-screen items-center justify-center gap-4 bg-white">
				<ScaleLoader />

				<h1 className="text-black">Loading prefered color theme...</h1>
			</div>
		);
	}

	return (
		<div className="flex min-h-screen flex-col">
			<Header />

			<div className="flex-grow">{children}</div>

			<Footer />
		</div>
	);
};

export default Layout;
