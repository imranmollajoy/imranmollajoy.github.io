import website from '$lib/config/website';
export const GET = async ({ url }) => {
	const { siteTitle, siteUrl } = website;
	const response = await fetch(`${url.origin}/api/posts`);
	const posts = await response.json();

	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml'
	};
	const responseOptions = {
		status: 200,
		headers
	};
	const body = `<rss xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:atom="https://www.w3.org/2005/Atom" version="2.0">
        <channel>
        <title>${siteTitle}</title>
        <link>${siteUrl}</link>
            <description>Blog on tutorials on various technological topics</description>

            ${posts
							.map(
								(p) =>
									`
        <item>
          <title>${p.post.meta.name}</title>
          <description>A blog built with SvelteKit about tech and stuff!</description>
          <link>${siteUrl}/posts/${p.post.meta.slug}/</link>
          <pubDate>${new Date(p.post.meta.date)}</pubDate>
        </item>
      `
							)
							.join('')}
      </channel>
    </rss>`;

	return new Response(JSON.stringify(body), responseOptions);
};
