import { getPostsByCategory } from '$lib/api/posts';
export const load = async ({ params: { category }, url }) => {
	const posts = await getPostsByCategory(`${url.origin}/api/posts`, category);
	return { posts, category };
};
