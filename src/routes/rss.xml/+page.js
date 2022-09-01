export const load = async ({ url }) => {
	const response = await fetch(`${url.origin}/api/rss`);
	const rss = await response.json();
	console.log(rss);
	return {
		rss
	};
};
