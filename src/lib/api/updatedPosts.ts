import type { PostMarkdownType, PostsType, PostType, RateType } from '$lib/types';

/**
 * Turn posts from GitHub into categories
 */
export async function getPosts(data: PostType[]): Promise<PostsType> {
	const postLimit = 4;
	const characterLimit = 80;

	const posts = data
		.filter((post) => !post.draft)
		.map((post) => {
			const descriptionLength = post.description.length;
			const ellipsis = descriptionLength > characterLimit ? '...' : '';
			const description = post.description.substring(0, characterLimit) + ellipsis;

			return {
				...post,
				description
			};
		});

	function sortedPosts(): PostType[] {
		return [...posts].sort((firstElement, secondElement) => {
			return new Date(secondElement.date).getTime() - new Date(firstElement.date).getTime();
		});
	}

	function getLatestPosts(): PostType[] {
		return sortedPosts().slice(0, postLimit);
	}

	function getPopularPosts(): PostType[] {
		return sortedPosts()
			.sort((firstElement, secondElement) => {
				return secondElement.views - firstElement.views;
			})
			.slice(0, postLimit);
	}

	function getSeries(): PostType[] {
		return sortedPosts()
			.filter((post) => post.series)
			.slice(0, postLimit);
	}

	function getPicks(): PostType[] {
		return sortedPosts()
			.sort(() => Math.random() - 0.5)
			.slice(0, postLimit);
	}

	return {
		posts: sortedPosts(),
		latestPost: getLatestPosts()[0],
		latest: getLatestPosts(),
		popular: getPopularPosts(),
		series: getSeries(),
		picks: getPicks()
	};
}

export async function getAllCategories(data: PostType[]) {
	const posts = data;
	return [...new Set(posts.map((post) => post.category))];
}

/**
 * Gets posts by category from GitHub
 */
export async function getPostsByCategory(data: PostType[], category: string): Promise<PostType[]> {
	const posts = data;
	const postsByCategory = posts.filter((post) => !post.draft && post.category === category);
	return postsByCategory;
}

export async function getPostsForHomepage(data: PostType[]) {
	return (await getPosts(data)).latest;
}
export async function getRelatedPosts(
	posts: PostType[],
	currentPostTitle: string,
	category: string,
	tags: string[]
) {
	// Filter posts with the same category
	const relatedPosts = posts.filter(
		(post) => post.category === category && post.title !== currentPostTitle
	);

	// Get all tags from the current post
	const currentPostTags = new Set(tags);

	// Filter related posts that have at least one tag in common with the current post
	const filteredPosts = relatedPosts.filter((post) => {
		const postTags = new Set(post.tags);
		for (const tag of postTags) {
			if (currentPostTags.has(tag)) {
				return true;
			}
		}
		return false;
	});

	// Sort filtered posts by number of tags in common with the current post (descending)
	filteredPosts.sort((a, b) => {
		const aTags = new Set(a.tags);
		const bTags = new Set(b.tags);
		const aCommonTags = [...currentPostTags].filter((tag) => aTags.has(tag));
		const bCommonTags = [...currentPostTags].filter((tag) => bTags.has(tag));
		return bCommonTags.length - aCommonTags.length;
	});

	// Return the top 3 filtered posts
	return filteredPosts.slice(0, 3);
}
