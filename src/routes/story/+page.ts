import { getPortfolios } from '$lib/api/portfolios';

export const load = async ({ setHeaders, url, fetch }) => {
	const response = await fetch(`${url.origin}/api/story`);

	if (!response.ok) {
		throw new Error('💩 Could not fetch posts');
	}

	const allposts = await response.json();

	const posts = allposts
		.filter((post) => !post.draft)
		.map((post) => {
			return post;
		});

	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=${60 * 60}`
	});
	return { posts };
};
