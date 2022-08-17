export async function load({ params, url }) {
	const post = await import(`../../../data/portfolios/${params.slug}.md`);
	const { name, featuredImg } = post.metadata;
	const img = await import(`../../../lib/images/${featuredImg}.png`);
	// const img = featuredImg;
	const content = post.default.render().html;
	const origin = url.origin;

	return {
		name,
		img,
		origin,
		content
	};
}
