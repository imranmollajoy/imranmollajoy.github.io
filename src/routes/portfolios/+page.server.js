export const load = async ({ url }) => {
	const response = await fetch(`${url.origin}/api/portfolios`);
	const portfolios = await response.json();
	return {
		portfolios
	};
};
