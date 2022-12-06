export const load = async ({ url, fetch }) => {
	const response = await fetch(`/api/posts`);
	const rawBlogs = await response.json();
	let blogs = [];
	//=================PAGINATION===============
	let page = url.searchParams.get('page');
	let currentPage = 1;
	const count = 12;
	if (page !== null) {
		currentPage = page;
	} else {
		currentPage = 1;
	}
	blogs = rawBlogs.slice(currentPage * count - count, currentPage * count);
	const totalPages = rawBlogs.length / count;
	return {
		blogs,
		currentPage,
		totalPages
	};
};
