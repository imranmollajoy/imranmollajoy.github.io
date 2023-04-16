export const prerender = true;
export const GET = async () => {
	const allPostFiles = import.meta.glob('../../portfolio/**/*.svx');
	const iterablePostFiles = Object.entries(allPostFiles);

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

	const responseOptions = {
		status: 200,
		headers: {
			'content-type': 'application/json'
		}
	};

	return new Response(JSON.stringify(allPosts), responseOptions);
};
