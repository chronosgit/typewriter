'use client';

import { useRouter } from 'next/navigation';
import Logo from '@/components/logo/Logo';
import Clickable from '@/components/clickable/Clickable';
import Github from '@/components/github/Github';
import ThemeSwitch from '@/components/theme-switch/ThemeSwitch';

const Header = () => {
	const router = useRouter();

	const toMyGithub = () => {
		router.push('https://github.com/chronosgit/typewriter');
	};

	return (
		<header className="mb-4 py-2 text-primary">
			<div className="max-w-screen-xl mx-auto flex justify-between items-center">
				<Clickable onClick={() => router.push('/')}>
					<Logo />
				</Clickable>

				<div className="flex gap-4 items-center">
					<ThemeSwitch />

					<Clickable onClick={toMyGithub}>
						<Github />
					</Clickable>
				</div>
			</div>
		</header>
	);
};

export default Header;
