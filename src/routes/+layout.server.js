export const prerender = true;
export const load = async ({ url }) => {
	const { origin, pathname } = url;
	return {
		origin,
		pathname
	};
};
