<script>
	import { Building2Icon, ThumbsUpIcon, Users2Icon } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	export let siteData;
	// $: console.log(siteData.productFeatures);
	$: productFeatures = siteData.productFeatures || {
		features: [
			{
				icon: '',
				description: '',
				title: ''
			},
			{
				icon: 'null',
				description: '',

				title: ''
			},
			{
				description: '',
				icon: 'null',
				title: ''
			}
		],
		title: '',
		subtitle: ''
	};

	const dispatch = createEventDispatcher();

	import { MousePointerClick } from 'lucide-svelte';
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	import { Badge } from '$lib/components/ui/badge';
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- {/* Icon Blocks */} -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	id="productFeatures"
	class="w-screen bg-muted/40 px-4 pb-12 pt-8
 transition-all ease-in lg:container
"
>
	<div class="mx-auto w-11/12 lg:w-[65%]">
		<!-- {/* Grid */} -->
		<div class="grid gap-4">
			<div class="">
				<h2 class="text-3xl font-bold lg:text-4xl">{productFeatures.title}</h2>
				<p class="mt-3 text-muted-foreground">
					{productFeatures.subtitle}
				</p>
			</div>
			<div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
				{#each productFeatures.features as s}
					<!-- {/* Icon Block */} -->
					<div class="flex rounded-md border bg-background px-3 py-6 shadow-none">
						<div class="ms-5 sm:ms-8">
							<h3 class="text-base font-semibold sm:text-lg">{s.title}</h3>
							<p class="mt-1 text-muted-foreground">
								{s.description}
							</p>
						</div>
					</div>
					<!-- {/* End Icon Block */} -->
				{/each}
			</div>
		</div>
		<!-- {/* End Grid */} -->
	</div>
</div>
