/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const response = await fetch(`/api/portfolios`);
	const portfolios = await response.json();

	return {
		portfolios
	};
}
