<script>
	import {
		BookOpenIcon,
		ChevronRightIcon,
		MessagesSquareIcon,
		Settings2Icon,
		TabletSmartphoneIcon
	} from 'lucide-svelte';

	export let siteData;
	// $: console.log(siteData?.howItWorks);
	let howItWorks = siteData?.howItWorks || {
		steps: [
			{
				title: '',
				imageURL: 'null',
				stepNumber: 1,
				description: ''
			},
			{
				title: '',
				imageURL: 'null',
				stepNumber: 2,
				description: ''
			},
			{
				imageURL: 'null',
				description: '',
				stepNumber: 3,
				title: ''
			}
		],
		title: '',
		subtitle: ''
	};

	const dispatch = createEventDispatcher();

	import { MousePointerClick } from 'lucide-svelte';
	import { createEventDispatcher } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { fade } from 'svelte/transition';
	import { Badge } from '$lib/components/ui/badge';
	import { colorClassOutline } from '$lib/customUtils';
</script>

<!-- {/* Icon Blocks */} -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	id="howItWorks"
	class="w-screen bg-background px-4 pb-12 pt-8
 transition-all ease-in lg:container
"
>
	<div class="mx-auto w-11/12 lg:w-[65%]">
		<h2 class="text-3xl font-bold lg:text-4xl">{siteData?.howItWorks?.title}</h2>
		<p class="mt-3 text-muted-foreground">
			{siteData?.howItWorks?.subtitle}
		</p>
	</div>

	<div class="mt-5 grid items-center gap-2 sm:grid-cols-2 lg:grid-cols-3">
		{#each siteData?.howItWorks?.steps as s}
			<!-- {/* Icon Block */} -->
			<div
				class="flex flex-row justify-center rounded-lg border bg-background
				 px-4 py-5 shadow-none hover:bg-[{siteData?.primaryColor}] hover:text-[{siteData?.primaryColorForeground}] md:p-7"
			>
				<div class="basis-1/12">
					<p
						class=" text-xl font-extrabold
					lg:text-2xl
					"
						style="color: {siteData?.primaryColor}; "
					>
						{s.stepNumber}
					</p>
				</div>
				<div class="basis-11/12">
					<h3 class="text-lg font-semibold">{s.title}</h3>
					<p class="mt-1">{s.description}</p>
				</div>
			</div>
			<!-- {/* End Icon Block */} -->
		{/each}
	</div>
</div>
