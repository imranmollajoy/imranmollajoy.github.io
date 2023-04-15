<script lang="ts">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { page } from '$app/stores';
	import {
		AppBar,
		AppShell,
		Drawer,
		drawerStore,
		LightSwitch,
		storePopup,
		popup
	} from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/Navigation.svelte';
	export let data;

	const categories = data.categories;

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	let popupSettings: PopupSettings = {
		// Set the event as: click | hover | hover-click | focus | focus-click
		event: 'click',
		// Provide a matching 'data-popup' value.
		target: 'goto'
	};
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar background="bg-surface-100n space-y-4 p-4 shadow-xl">
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<strong class="text-xl uppercase">Imjoy</strong>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<button
					class="btn variant-ringed-primary hover:variant-soft-primary"
					use:popup={popupSettings}>Explore</button
				>
				<div
					class="card p-4 w-60 shadow-xl"
					data-popup="goto"
					style="left: -62.414px; top: 49.8012px; opacity: 0; pointer-events: none; display: block;"
				>
					<nav class="list-nav">
						<ul>
							<li>
								<a href="/"> <span>Homepage</span></a>
								<hr class="my-4" />
								<h4>Blog</h4>
								{#each categories as cat}
									<a href="/blog/category/{cat}"> <span>{cat}</span></a>
								{/each}
							</li>
						</ul>
					</nav>
					<div class="arrow bg-surface-100-800-token" style="left: 116px; top: -4px;" />
				</div>
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
