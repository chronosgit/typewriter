'use client';

import { useRouter } from 'next/navigation';
import Logo from '@/components/logo/Logo';
import Clickable from '@/components/clickable/Clickable';
import Github from '@/components/github/Github';

const Header = () => {
  const router = useRouter();

  const toMyGithub = () => {
    router.push('https://github.com/chronosgit/typewriter');
  };

  return (
    <div className="flex justify-between items-center mb-4 px-4 py-2 text-primary">
      <Clickable onClick={() => router.push('/')}>
        <Logo />
      </Clickable>

      <Clickable onClick={toMyGithub}>
        <Github />
      </Clickable>
    </div>
  );
};

export default Header;
