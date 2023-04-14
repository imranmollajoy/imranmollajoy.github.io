import { getAllCategories } from '$lib/api/posts';

export const load = async ({ setHeaders, url }) => {
	const categories = await getAllCategories(`${url.origin}/api/posts`);

	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=${60 * 60}`
	});
	return { categories };
};
