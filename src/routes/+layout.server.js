export const load = async ({ url }) => {
	const { origin, pathname } = url;
	return {
		url,
		origin,
		pathname
	};
};
