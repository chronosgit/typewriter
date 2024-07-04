import Image from 'next/image';
import moonUrl from '@/assets/moon.png';

const Moon = () => {
	return <Image src={moonUrl} alt="moon" />;
};

export default Moon;
