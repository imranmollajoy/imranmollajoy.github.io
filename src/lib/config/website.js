const website = {
	author: 'Imran Molla Joy',
	siteTitle: `Imran's Site`,
	siteShortTitle: `Imran's Site`,
	siteUrl: import.meta.env ? /** @type {string} */ (import.meta.env.VITE_SITE_URL) : ''
};

export { website as default };
