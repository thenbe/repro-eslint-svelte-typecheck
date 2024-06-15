import type { PageLoad } from './$types';

export const load = (() => {
	return {
		greeting: 'hello'
	};
}) satisfies PageLoad;
