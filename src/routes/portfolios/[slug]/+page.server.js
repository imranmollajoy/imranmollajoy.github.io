export async function load({ params, url }) {
	const post = await import(`../../../data/portfolios/${params.slug}/post.svx`);
	const { name, slug } = post.metadata;
	const updatedName = name + ' with Source Code';
	const content = post.default.render().html;
	const origin = url.origin;
	const imgDataPromise = import(`../../../data/portfolios/${params.slug}/index.js`);
	const [imageDataResult] = await Promise.all([imgDataPromise]);
	const { default: imageData } = imageDataResult;
	return {
		name,
		updatedName,
		slug,
		imageData,
		origin,
		content
	};
}
