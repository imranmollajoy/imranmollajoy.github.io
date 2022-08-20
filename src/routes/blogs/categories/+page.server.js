export const load = async ({ url }) => {
	const response = await fetch(`${url.origin}/api/blogs`);
	const blogs = await response.json();

	// get the categories
	var categories = [];
	blogs.forEach((element) => {
		if (!categories.includes(element.meta.category))
			categories = [...categories, element.meta.category];
	});
	console.log(categories);
	return {
		categories
	};
};
