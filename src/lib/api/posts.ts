import { postsDataUrl, postsUrl } from './config';
import type { PostMarkdownType, PostsType, PostType, RateType } from '$lib/types';

/**
 * Get posts data from `data/posts.json` on GitHub
 */
export async function getPostsData(path: string) {
	const response = await fetch(path);

	if (!response.ok) {
		throw new Error('💩 Could not fetch posts');
	}

	const posts: PostType[] = await response.json();
	return posts;
}

/**
 * Turn posts from GitHub into categories
 */
export async function getPosts(path: string): Promise<PostsType> {
	const data = await getPostsData(path);
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

export async function getAllCategories(path: string) {
	const posts = await getPostsData(path);
	return [...new Set(posts.map((post) => post.category))];
}

/**
 * Gets posts by category from GitHub
 */
export async function getPostsByCategory(path: string, category: string): Promise<PostType[]> {
	const posts = await getPostsData(path);
	const postsByCategory = posts.filter((post) => !post.draft && post.category === category);
	return postsByCategory;
}
