<script>
	import defaultOgImage from '$lib/images/imj.svg';
	import defaultOgSquareImage from '$lib/images/imj.svg';

	import website from '$lib/config/website';
	import OpenGraph from './OpenGraph.svelte';

	const { siteTitle, siteUrl } = website;
	export let seo = {
		article: false,
		datePublished: null,
		metadescription: '',
		slug: '',
		title: ''
	};
	export let article = seo.article;
	export let lastUpdated = seo.lastUpdated;
	export let datePublished = seo.datePublished;
	export let metadescription = seo.metadescription;
	export let slug = seo.slug;
	export let title = seo.title;

	const defaultAlt = ' ';

	export let ogImage = {
		url: defaultOgImage,
		alt: defaultAlt
	};
	export let ogSquareImage = {
		url: defaultOgSquareImage,
		alt: defaultAlt
	};

	const pageTitle = `${siteTitle} | ${title}`;
	const url = `${siteUrl}/${slug}`;
	$: openGraphProps = {
		article,
		datePublished,
		lastUpdated,
		image: ogImage,
		squareImage: ogSquareImage,
		metadescription,
		pageTitle,
		siteTitle,
		url,
		...(article ? { datePublished, lastUpdated } : {})
	};
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={metadescription} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<link rel="canonical" href={url} />
</svelte:head>
<OpenGraph {...openGraphProps} />
