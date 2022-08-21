export async function load({ params, url }) {
	const post = await import(`../../../data/portfolios/${params.slug}.md`);
	const { name, featuredImg } = post.metadata;
	const content = post.default.render().html;
	const origin = url.origin;

	return {
		name,
		featuredImg,
		origin,
		content
	};
}
