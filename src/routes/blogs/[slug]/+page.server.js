export async function load({ params, url }) {
	const post = await import(`../../../data/blogs/${params.slug}.svx`);
	const { name, category } = post.metadata;
	//const img = await import(`../../../lib/images/${featuredImg}.png`);
	// const img = featuredImg;
	const content = post.default.render().html;
	const origin = url.origin;

	return {
		name,
		category,
		origin,
		content
	};
}
