import { getAllCategories } from '$lib/api/posts';
export const prerender = true;
export const ssr = false;
export const load = async ({ setHeaders, url }) => {
	const categories = await getAllCategories(`${url.origin}/api/posts`);

	return { categories };
};
