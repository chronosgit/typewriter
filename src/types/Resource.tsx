import { Key, ReactElement } from 'react';
import { Url } from 'next/dist/shared/lib/router/router';

interface Resource {
	id: Key | null | undefined;
	name: String;
	descr: String;
	linkUrl: Url;
	linkLabel: String;
	icon: ReactElement | String;
}

export default Resource;
