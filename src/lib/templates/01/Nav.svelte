<script>
	// @ts-nocheck

	import { Button } from '$lib/components/ui/button';
	import { Menu } from 'lucide-svelte';

	export let siteData;
	let active = 'hero';
	let navItems = [
		{
			section: 'hero',
			title: 'Home'
		},
		{
			section: 'problem',
			title: 'The Problem'
		},
		{
			section: 'solution',
			title: 'Our Solution'
		},
		{
			title: 'Team',
			section: 'team'
		},
		{
			title: 'FAQs',
			section: 'faqs',
			active: false
		},
		{
			section: 'contact',
			title: 'Contact'
		}
	];
	import * as Sheet from '$lib/components/ui/sheet';
	import { writable } from 'svelte/store';
	import { slide } from 'svelte/transition';
	import { browser } from '$app/environment';
	let navSheet = false;
</script>

<!-- {#if showNav} -->
<div
	in:slide
	class=" flex w-full flex-row items-center justify-between
bg-background px-4 py-3 shadow-sm lg:gap-10 lg:px-6 lg:py-5"
>
	{#if siteData.startup_logo}
		<img src={siteData.startup_logo} class="size-10 object-contain" alt="" />
	{:else}
		<p class="text-xl font-extrabold">{siteData.startup_name}</p>
	{/if}

	<div class="hidden flex-row gap-10 lg:flex">
		{#each navItems as { section, title }}
			<a
				class:font-extrabold={active == section}
				on:click={() => {
					active = section;
				}}
				class="hover:font-semibold"
				style={active == section ? `color: ${siteData.primaryColor}` : ''}
				href="#{section}">{title}</a
			>
		{/each}
	</div>

	<Button
		variant="outline"
		size="sm"
		class="lg:hidden"
		on:click={() => {
			navSheet = true;
		}}
	>
		<Menu class="size-6" />
	</Button>
</div>
<!-- {/if} -->

<Sheet.Root bind:open={navSheet}>
	<!-- <Sheet.Trigger>Open</Sheet.Trigger> -->
	<Sheet.Content>
		<Sheet.Header>
			<Sheet.Title>
				{#if siteData.startup_logo}
					<img src={siteData.startup_logo} class="size-10 object-contain" alt="" />
				{:else}
					<p class="text-xl font-extrabold">{siteData.startup_name}</p>
				{/if}
			</Sheet.Title>
			<Sheet.Description>
				<div class="mt-6 flex flex-col items-start gap-3">
					{#each navItems as { section, title }}
						<a
							on:click={() => {
								active = section;
								navSheet = false;
							}}
							class:font-extrabold={active == section}
							class=""
							style={active == section ? `color: ${siteData.primaryColor}` : ''}
							href="#{section}">{title}</a
						>
					{/each}
				</div>
			</Sheet.Description>
		</Sheet.Header>
	</Sheet.Content>
</Sheet.Root>
