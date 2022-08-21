// +server.js
export const GET = async () => {
	const allPostFiles = import.meta.glob('../../../data/blogs/*.svx');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.replace('/data', '').slice(8, -4);

			return {
				meta: metadata,
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

	var newSort = [...sortedFeaturedPosts, ...sortedRestPosts];

	const responseOptions = {
		status: 200,
		headers: {
			'content-type': 'application/json'
		}
	};

	return new Response(JSON.stringify(newSort), responseOptions);
};
