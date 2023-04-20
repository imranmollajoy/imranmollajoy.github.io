import { getPortfolios } from '$lib/api/portfolios';
import type { PortfolioType } from '$lib/types';

export const load = async ({ setHeaders, url, fetch }) => {
	const response = await fetch(`${url.origin}/api/portfolio`);

	if (!response.ok) {
		throw new Error('💩 Could not fetch posts');
	}

	const allposts: PortfolioType[] = await response.json();
	const { posts } = await getPortfolios(allposts);

	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=${60 * 60}`
	});
	return { posts };
};
