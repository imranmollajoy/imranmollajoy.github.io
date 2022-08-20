export const load = async ({ params, url }) => {
	const response = await fetch(`${url.origin}/api/blogs`);
	const allBlogs = await response.json();
	const category = params.name;
	var blogs = [];
	allBlogs.forEach((element) => {
		if (element.meta.category === category) blogs = [...blogs, element];
	});
	return {
		blogs,
		category
	};
};
