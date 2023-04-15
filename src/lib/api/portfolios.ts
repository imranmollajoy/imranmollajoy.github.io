import type { PortfolioType } from '$lib/types';

/**
 * Turn posts from GitHub into categories
 */
export async function getPortfolios(data: PortfolioType[]): Promise<PostsType> {
	const postLimit = 4;
	const characterLimit = 80;

	const posts = data
		.filter((post) => !post.draft)
		.map((post) => {
			return post;
		});

	function sortedPosts(): PortfolioType[] {
		return [...posts].sort((firstElement, secondElement) => {
			return new Date(secondElement.date).getTime() - new Date(firstElement.date).getTime();
		});
	}

	function getLatestPosts(): PortfolioType[] {
		return sortedPosts().slice(0, postLimit);
	}

	return {
		posts: sortedPosts(),
		latest: getLatestPosts()
	};
}

export async function getPortfoliosForHomepage(data: PortfolioType[]) {
	return (await getPortfolios(data)).latest;
}
