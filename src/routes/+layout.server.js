export const load = async ({ url }) => {
	const { origin, pathname } = url;
	return {
		origin,
		pathname
	};
};
