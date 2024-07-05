import TechStack from '@/types/TechStack';
import { FC } from 'react';

interface Props {
	tech: TechStack;
}

const Tech: FC<Props> = ({ tech }) => {
	return <div className="">{tech.icon}</div>;
};

export default Tech;
