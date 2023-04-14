import { getAllCategories } from '$lib/api/updatedPosts';
import type { PostType } from '$lib/types';

export const load = async ({ setHeaders, url }) => {
	const response = await fetch(`${url.origin}/api/posts`);

	if (!response.ok) {
		throw new Error('💩 Could not fetch posts');
	}

	const posts: PostType[] = await response.json();

	const categories = await getAllCategories(posts);

	return { categories };
};
