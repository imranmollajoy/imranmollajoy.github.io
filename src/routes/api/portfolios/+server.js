// +server.js
export const GET = async () => {
	const allPostFiles = import.meta.glob('../../../data/portfolios/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.replace('/data', '').slice(8, -3);
			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	const sortedPosts = allPosts.sort((a, b) => {
		return new Date(b.meta.date) - new Date(a.meta.date);
	});

	const responseOptions = {
		status: 200,
		headers: {
			'content-type': 'application/json'
		}
	};
	return new Response(JSON.stringify(sortedPosts), responseOptions);
};
