<script lang="ts">
	// @ts-nocheck

	import * as Card from '$lib/components/ui/card';
	import { Image, PresentationIcon, StoreIcon } from 'lucide-svelte';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	export let siteData;
	// let team = siteData?.team;
	// $: team = siteData.team || {
	// 	title: '',
	// 	subtitle: '',
	// 	members: [
	// 		{
	// 			name: '',
	// 			contacts: [
	// 				{
	// 					value: '',
	// 					platform: ''
	// 				}
	// 			],
	// 			imageURL: '',
	// 			bio: '',
	// 			position: ''
	// 		}
	// 	]
	// };
	// $: console.log(team);

	import { MousePointerClick } from 'lucide-svelte';
	import { createEventDispatcher } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { fade } from 'svelte/transition';
	import { Badge } from '$lib/components/ui/badge';
	import { uploadFile } from '$lib/firebaseUtils';
	import { toast } from 'svelte-sonner';
	import { invalidate } from '$app/navigation';
	const dispatch = createEventDispatcher();
	let imageInput: HTMLInputElement;
	let file: { name: any } | null;
	let activeTeamIndex = null;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- {/* Icon Blocks */} -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	id="team"
	class="
	w-screen bg-muted/10 px-4 pb-20 pt-16
 transition-all ease-in lg:container
"
>
	<div class="mx-auto w-11/12 px-4 lg:w-[65%]">
		<h2 class="text-3xl font-bold lg:text-4xl">{siteData.team.title}</h2>
		<p class="mt-3 text-muted-foreground">
			{siteData.team.subtitle}
		</p>
	</div>
	<div class="mt-5 grid items-center gap-3 md:gap-5 lg:grid-cols-3">
		{#each siteData.team.members || [] as t, i (t.name)}
			<!-- {/* Card. */} -->
			<Card.Root class="h-max shadow-none">
				<Card.Header class="flex-row items-center gap-4 pb-4">
					<!-- svelte-ignore missing-declaration -->

					<Avatar.Root class="z-[50] size-16">
						<Avatar.Image src={t.imageURL} alt={t.name} />
						<Avatar.Fallback>{t.name[0]}</Avatar.Fallback>
					</Avatar.Root>

					<Card.Title>
						<p class="text-xl">{t.name}</p>
						<p class="text-base font-normal">{t?.position || ''}</p>
					</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="text-sm">
						{t.bio}
					</div>
				</Card.Content>
			</Card.Root>
			<!-- {/* End Card. */} -->
		{/each}
	</div>
</div>
<!-- {/* End Icon Blocks */} -->
