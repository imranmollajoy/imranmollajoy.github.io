import { getAllCategories } from '$lib/api/updatedPosts';
import type { PostType } from '$lib/types';
export const load = async ({ setHeaders, url, fetch }) => {
	const response = await fetch(`${url.origin}/api/blog`);

	if (!response.ok) {
		throw new Error('💩 Could not fetch posts');
	}

	const allposts: PostType[] = await response.json();
	const categories = await getAllCategories(allposts);
	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=${60 * 60}`
	});
	return { categories };
};
