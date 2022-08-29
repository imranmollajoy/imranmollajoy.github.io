export async function load({ params, url }) {
	const post = await import(`../../../data/blogs/${params.slug}/post.svx`);
	const { name, category, featuredImg, date, excerpt } = post.metadata;
	const content = post.default.render().html;
	const origin = url.origin;
	const imgData = await import(`/src/data/blogs/${params.slug}/${featuredImg}`);
	const img = imgData.default;
	return {
		name,
		category,
		origin,
		img,
		date,
		excerpt,
		content
	};
}
