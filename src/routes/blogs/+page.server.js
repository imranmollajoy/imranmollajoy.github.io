export const load = async ({ url }) => {
	const response = await fetch(`${url.origin}/api/blogs`);
	const rawBlogs = await response.json();
	let blogs = [];
	//=================PAGINATION===============
	const page = url.searchParams.get('page');
	const count = 10;
	if (page !== null) {
		blogs = rawBlogs.slice(page * count - count, page * count);
	} else {
		blogs = rawBlogs;
	}
	const currentPage = page;
	const totalPages = rawBlogs.length / count;
	return {
		blogs,
		currentPage,
		totalPages
	};
};
