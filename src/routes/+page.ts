import { getPostsForHomepage } from '$lib/api/updatedPosts';
import { getPortfoliosForHomepage } from '$lib/api/portfolios';
import type { PostType, PortfolioType } from '$lib/types';

export const load = async ({ setHeaders, url, fetch }) => {
	const response = await fetch(`${url.origin}/api/blog`);
	const resForPortofolio = await fetch(`${url.origin}/api/portfolio`);

	const allposts: PostType[] = await response.json();
	const allPortfolios: PortfolioType[] = await resForPortofolio.json();

	const posts = await getPostsForHomepage(allposts);
	const portfolios = await getPortfoliosForHomepage(allPortfolios);
	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=${60 * 60}`
	});
	return { posts, portfolios };
};
