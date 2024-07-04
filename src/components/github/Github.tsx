import Image from 'next/image';
import githubUrl from '@/assets/github.png';

const Github = () => {
	return (
		<Image
			src={githubUrl}
			alt="github icon"
			width={40}
			className="color-change"
		/>
	);
};

export default Github;
