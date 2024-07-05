import { Key, ReactElement } from 'react';
import { Url } from 'next/dist/shared/lib/router/router';

interface Resource {
	id: Key | null | undefined;
	name: string;
	descr: string;
	linkUrl: Url;
	linkLabel: string;
	icon: ReactElement | string;
}

export default Resource;
