<script>
	// @ts-nocheck

	import {
		BookOpenIcon,
		MessagesSquareIcon,
		Settings2Icon,
		TabletSmartphoneIcon
	} from 'lucide-svelte';
	import * as Card from '$lib/components/ui/card';

	export let siteData;
	// $: console.log(siteData.problemStats);
	$: problemStats = siteData.problemStats || [
		{
			stat: '',
			stat_description: ''
		}
	];
	const dispatch = createEventDispatcher();

	import { Button } from '$lib/components/ui/button';
	import { MousePointerClick } from 'lucide-svelte';
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	import { Badge } from '$lib/components/ui/badge';
	import { colorClass } from '$lib/customUtils';

	function returnGrid(length) {
		return `lg:grid-cols-${length}`;
	}
</script>

<!-- {/* Icon Blocks */} -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="w-screen py-4 transition-all ease-in lg:container lg:py-8
	
"
	style="background-color: {siteData.primaryColor}; "
>
	<div
		class="mx-auto grid grid-cols-1 items-center gap-2 lg:w-[65%] {returnGrid(problemStats.length)}"
	>
		<!-- {/* Icon Block */} -->
		{#each problemStats as p}
			<Card.Root
				class="mx-auto  w-11/12 border-none bg-transparent py-4 shadow-none"
				style="color: {siteData.primaryColorForeground}"
			>
				<Card.Content>
					<div class="">
						<p class="text-center text-4xl font-extrabold">{p.stat}</p>
						<p class="mt-1 text-center text-sm">{p.stat_description}</p>
					</div>
				</Card.Content>
			</Card.Root>
		{/each}
		<!-- {/* End Icon Block */} -->
	</div>
</div>
<!-- {/* End Icon Blocks */} -->
