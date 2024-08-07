import { Key, ReactElement } from 'react';
import { Url } from 'next/dist/shared/lib/router/router';

interface TechStack {
	id: Key | null | undefined;
	name: string;
	link: Url;
	icon: ReactElement;
}

export default TechStack;
