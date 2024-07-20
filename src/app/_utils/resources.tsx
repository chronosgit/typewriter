import Resource from '@/types/Resource';
import { BsDiscord } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';
import { LiaLinkedin } from 'react-icons/lia';

const resourcesMock: Resource[] = [
	{
		id: '1',
		name: 'Github',
		descr: 'Check out my other amazing stuff on github!',
		linkUrl: 'https://github.com/chronosgit',
		linkLabel: 'Check profile',
		icon: <FiGithub />,
	},
	{
		id: '2',
		name: 'Linkedin',
		descr: "Let's connect on Linkedin!",
		linkUrl: 'https://kz.linkedin.com/in/nurken-kidirmaganbetov-338b412aa',
		linkLabel: 'Connect',
		icon: <LiaLinkedin />,
	},
	{
		id: '3',
		name: 'Discord',
		descr: 'Add me on Discord!',
		linkUrl: 'https://discordapp.com/users/chronosgit',
		linkLabel: 'Find me',
		icon: <BsDiscord />,
	},
];

export default resourcesMock;
