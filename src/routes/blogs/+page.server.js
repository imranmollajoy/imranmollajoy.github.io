export const load = async ({ url }) => {
	const response = await fetch(`${url.origin}/api/blogs`);
	const blogs = await response.json();
	return {
		blogs
	};
};
