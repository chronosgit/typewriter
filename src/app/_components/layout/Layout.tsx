'use client';

import { FC, ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/header/Header";

interface Props {
	children: ReactNode;
};

const Layout: FC<Props> = ({children}) => {

	const pathname = usePathname();
	const hasLayout = (pathname === '/'); 

	return (
		<>
			{hasLayout && <Header />}

			{children}
		</>
	);
};

export default Layout;