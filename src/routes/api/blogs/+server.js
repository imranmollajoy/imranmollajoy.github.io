/* eslint-disable no-unused-vars */
// api/blogs/+server.js
export const GET = async ({ url, params }) => {
	const allPostFiles = import.meta.glob('../../../data/blogs/**/*.svx');
	const iterablePostFiles = Object.entries(allPostFiles);
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.replace('/data', '').replace('post', '').slice(8, -4);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);
	const allImagesFiles = import.meta.glob(`../../../data/blogs/**/index.js`);
	const iterableImageFiles = Object.entries(allImagesFiles);
	const allImages = await Promise.all(
		iterableImageFiles.map(async ([path, resolver]) => {
			const { default: imageData } = await resolver();
			const postPath = path.replace('/data', '').replace('index', '').slice(8, -3);
			return {
				imageData,
				path: postPath
			};
		})
	);

	var featuredPosts = [];
	var restPosts = [];

	allPosts.forEach((element) => {
		if (element.meta.featured) featuredPosts = [...featuredPosts, element];
		else restPosts = [...restPosts, element];
	});

	const sortedFeaturedPosts = featuredPosts.sort((a, b) => {
		return new Date(b.meta.date) - new Date(a.meta.date);
	});
	const sortedRestPosts = restPosts.sort((a, b) => {
		return new Date(b.meta.date) - new Date(a.meta.date);
	});

	const posts = [...sortedFeaturedPosts, ...sortedRestPosts];
	var blogs = [];
	posts.forEach((element) => {
		allImages.forEach((img) => {
			if (element.path === img.path) {
				const imgSrc = img.imageData;
				const post = element;
				blogs = [
					...blogs,
					{
						post,
						imgSrc
					}
				];
			}
		});
	});
	const responseOptions = {
		status: 200,
		headers: {
			'content-type': 'application/json'
		}
	};

	return new Response(JSON.stringify(blogs), responseOptions);
};
