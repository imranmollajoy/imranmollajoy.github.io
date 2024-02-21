<script lang="ts">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { AppBar, AppShell, LightSwitch, storePopup, popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import Seo from '$lib/components/SEO.svelte';
	export let data;

	const categories = data.categories;

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	let popupSettings: PopupSettings = {
		event: 'click',
		target: 'goto'
	};
</script>

<Seo />
<AppShell>
	<svelte:fragment slot="header">
		<AppBar background="bg-surface-100n space-y-4 p-4 shadow-xl">
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<a href="/" class="text-primary-500">
						<strong class="text-xl uppercase">Imjoy</strong>
					</a>
				</div>
				<button class="btn ml-2 hover:variant-soft-primary" use:popup={popupSettings}>
					<i class="icon text-lg md:hidden">menu</i>
					<span class="hidden md:inline-block">Explore</span>
				</button>
				<div
					class="card p-4 w-60 shadow-xl"
					data-popup="goto"
					style="left: -62.414px; top: 49.8012px; opacity: 0; pointer-events: none; display: block;"
				>
					<nav class="list-nav">
						<ul>
							<li>
								<a href="/"> <span>Homepage</span></a>
								<a href="/portfolio"><span>Portfolio</span></a>
								<a href="/story"> <span>Story</span></a>
								<!-- <hr class="my-4" />
								<h4>Blog</h4>
								{#each categories as cat}
									<a href="/blog/category/{cat}"> <span>{cat}</span></a>
								{/each} -->
							</li>
						</ul>
					</nav>
					<div class="arrow bg-surface-100-800-token" style="left: 116px; top: -4px;" />
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
