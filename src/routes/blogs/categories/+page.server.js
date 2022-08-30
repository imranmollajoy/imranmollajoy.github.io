export const load = async ({ url }) => {
	const response = await fetch(`${url.origin}/api/blogs`);
	const data = await response.json();
	const blogs = data.blogs;
	// get the categories
	var categories = [];
	blogs.forEach((element, index) => {
		if (!categories.includes(element.meta.category[0]))
			categories = [...categories, element.meta.category];
	});
	return {
		categories
	};
};
