<script>
	// import { Button } from '$lib/components/ui/button';
	import {
		BookOpenIcon,
		ChevronRightIcon,
		CircleDot,
		MessagesSquareIcon,
		ThumbsUpIcon
	} from 'lucide-svelte';
	export let siteData;
	let problem = siteData.problem || {
		title: '',
		subtitle: '',
		problems: [
			{
				description: '',
				title: '',
				imageURL: 'null',
				stat: null,
				stat_description: null
			}
		]
	};
	const dispatch = createEventDispatcher();

	import { Button } from '$lib/components/ui/button';
	import { MousePointerClick } from 'lucide-svelte';
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	import { Badge } from '$lib/components/ui/badge';
	import { colorClass } from '$lib/customUtils';
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- {/* Icon Blocks */} -->
<!-- svelte-ignore a11y-click-events-have-key-events -->

<!-- {/* Grid */} -->
<div
	id="problem"
	class="w-screen
px-4 py-8 transition-all ease-in
 lg:py-12"
>
	<div
		class="mx-auto grid w-11/12 grid-cols-1 items-start gap-5 pb-12
	pt-10 lg:w-[65%] lg:grid-cols-2
	lg:gap-5 lg:py-16"
	>
		<div class="mx-auto">
			<p class="mb-5 text-xs font-semibold">THE PROBLEM</p>
			<h2
				class=" 
			text-3xl font-bold lg:text-4xl
			"
			>
				{problem?.title}
			</h2>
			<p class="mt-1 text-muted-foreground">
				{problem?.subtitle}
			</p>
		</div>
		<!-- {/* End Col */} -->
		<div class="space-y-6 lg:space-y-10">
			<!-- {/* Icon Block */} -->
			{#each problem?.problems as p}
				<div class="flex">
					<!-- {/* Icon */} -->
					<span
						class="inline-flex size-8 flex-shrink-0 items-center
						justify-center rounded-full border-none"
						style="
						background-color: {siteData.primaryColor};
						 color: {siteData.primaryColorForeground};"
					>
						<CircleDot class="h-5 w-5 flex-shrink-0" />
					</span>
					<div class="ms-5 sm:ms-8">
						<h3 class="text-base font-semibold sm:text-lg">{p.title}</h3>
						<p class="mt-1 text-muted-foreground">
							{p.description}
						</p>
					</div>
				</div>
			{/each}
			<!-- {/* End Icon Block */} -->
		</div>
		<!-- {/* End Col */} -->
	</div>
</div>

<!-- {/* End Grid */} -->
<!-- {/* End Icon Blocks */} -->
