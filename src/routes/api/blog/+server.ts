export const GET = async () => {
	// Import all blog post files using dynamic import
	const allPostFiles = import.meta.glob('../../blog/**/.svx');
	const iterablePostFiles = Object.entries(allPostFiles);

	// Extract metadata for each post and add path property
	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(5, -10);
			return {
				...metadata,
				path: postPath
			};
		})
	);

	// Set response options and return response
	const responseOptions = {
		status: 200,
		headers: {
			'content-type': 'application/json'
		}
	};

	return new Response(JSON.stringify(allPosts), responseOptions);
};

export const prerender = true;
