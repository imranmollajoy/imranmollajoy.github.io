export const prerender = true;
export const ssr = false;
export const load = async ({ url }) => {
	const { origin, pathname } = url;
	return {
		origin,
		pathname
	};
};
