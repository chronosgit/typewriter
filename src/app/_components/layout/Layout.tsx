'use client';

import { FC, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

interface Props {
	children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
	const pathname = usePathname();
	const hasLayout = pathname === '/';

	if (!hasLayout) {
		return <>{children}</>;
	}

	return (
		<>
			<Header />

			{children}

			<Footer />
		</>
	);
};

export default Layout;
