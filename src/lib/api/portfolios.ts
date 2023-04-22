import type { PostType } from '$lib/types';

/**
 * Turn posts from GitHub into categories
 */
export async function getPortfolios(data: PostType[]) {
	const postLimit = 4;
	const characterLimit = 80;

	const posts = data
		.filter((post) => !post.draft)
		.map((post) => {
			return post;
		});

	function sortedPosts(): PostType[] {
		return [...posts].sort((firstElement, secondElement) => {
			return new Date(secondElement.date).getTime() - new Date(firstElement.date).getTime();
		});
	}

	function getLatestPosts(): PostType[] {
		return sortedPosts().slice(0, postLimit);
	}

	return {
		posts: sortedPosts(),
		latest: getLatestPosts()
	};
}

export async function getPortfoliosForHomepage(data: PostType[]) {
	return (await getPortfolios(data)).latest;
}
