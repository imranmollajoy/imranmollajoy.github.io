import { getPosts } from '$lib/api/posts';

export const load = async ({ setHeaders, url }) => {
	const posts = await getPosts(`${url.origin}/api/posts`);

	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=${60 * 60}`
	});
	return { posts };
};
