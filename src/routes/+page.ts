import { getPortfoliosForHomepage } from '$lib/api/portfolios';
import type { PortfolioType } from '$lib/types';

export const load = async ({ setHeaders, url, fetch }) => {
	const resForPortofolio = await fetch(`${url.origin}/api/portfolio`);

	const allPortfolios: PortfolioType[] = await resForPortofolio.json();

	const portfolios = await getPortfoliosForHomepage(allPortfolios);
	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=${60 * 60}`
	});
	return { portfolios };
};
