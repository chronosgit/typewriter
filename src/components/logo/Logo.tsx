import Image from 'next/image';
import logoUrl from '@/assets/logo.png';

const Logo = () => {
	return (
		<Image
			src={logoUrl}
			alt="typewriter"
			width={60}
			className="color-change"
			style={{ height: 'auto' }}
		/>
	);
};

export default Logo;
