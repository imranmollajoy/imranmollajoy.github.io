import { getPostsByCategory } from '$lib/api/updatedPosts';
import type { PostType } from '$lib/types';
export const load = async ({ params, url, fetch }) => {
	const response = await fetch(`${url.origin}/api/blog`);
	if (!response.ok) {
		throw new Error('💩 Could not fetch posts');
	}

	const allposts: PostType[] = await response.json();
	const posts = await getPostsByCategory(allposts, params.slug);
	return { posts, category: params.slug };
};
export const prerender = true;
