import TechStack from '@/types/TechStack';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaCss3, FaHtml5, FaReact } from 'react-icons/fa6';
import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri';

const techStack: TechStack[] = [
	{
		id: '1',
		name: 'HTML',
		link: 'https://www.w3schools.com/html',
		icon: <FaHtml5 />,
	},
	{
		id: '2',
		name: 'CSS',
		link: 'https://www.w3schools.com/css',
		icon: <FaCss3 />,
	},
	{
		id: '3',
		name: 'TS',
		link: 'https://www.typescriptlang.org/docs/',
		icon: <BiLogoTypescript />,
	},
	{
		id: '4',
		name: 'React',
		link: 'https://react.dev',
		icon: <FaReact />,
	},
	{
		id: '5',
		name: 'NextJS',
		link: 'https://nextjs.org/docs',
		icon: <RiNextjsLine />,
	},
	{
		id: '6',
		name: 'TailwindCSS',
		link: 'https://tailwindcss.com',
		icon: <RiTailwindCssFill />,
	},
];

export default techStack;
