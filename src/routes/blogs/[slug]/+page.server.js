/* eslint-disable no-unused-vars */
export async function load({ params, url }) {
	const post = await import(`../../../data/blogs/${params.slug}/post.svx`);
	const { name, category, date, excerpt } = post.metadata;
	const content = post.default.render().html;
	const origin = url.origin;
	const imgDataPromise = import(`../../../data/blogs/${params.slug}/index.js`);
	const [imageDataResult] = await Promise.all([imgDataPromise]);
	const { default: imageData } = imageDataResult;
	return {
		name,
		category,
		origin,
		imageData,
		date,
		excerpt,
		content
	};
}
