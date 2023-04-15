import { getPostsByCategory } from '$lib/api/updatedPosts';
import type { PostType } from '$lib/types';
export const load = async ({ params: { category }, url }) => {
	const response = await fetch(`${url.origin}/api/posts`);

	if (!response.ok) {
		throw new Error('💩 Could not fetch posts');
	}

	const allposts: PostType[] = await response.json();
	const posts = await getPostsByCategory(allposts, category);
	return { posts, category };
};
export const prerender = 'auto';
