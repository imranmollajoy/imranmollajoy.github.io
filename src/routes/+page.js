export const load = async ({ url }) => {
	const resPort = await fetch(`${url.origin}/api/portfolios`);
	const resBlog = await fetch(`${url.origin}/api/posts`);

	const portfolios = await resPort.json();
	const blogs = await resBlog.json();

	return {
		portfolios,
		blogs
	};
};
