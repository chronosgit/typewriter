import Resource from '@/types/Resource';
import { FiGithub } from 'react-icons/fi';

const resourcesMock: Resource[] = [
	{
		id: '1',
		name: 'Github',
		descr: 'Checkout my other amazing stuff on github!',
		linkUrl: 'https://github.com/chronosgit',
		linkLabel: 'Check profile',
		icon: <FiGithub />,
	},
];

export default resourcesMock;
