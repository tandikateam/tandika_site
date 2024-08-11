<script>
	import { CircleCheck } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	export let siteData;
	// $: console.log(siteData.solution);
	$: solution = siteData.solution || {
		solutions: [
			{
				imageURL: '',
				description: '',
				title: '',
				pricing: 'null'
			},
			{
				imageURL: 'null',
				description: '',
				pricing: 'null',
				title: ''
			},
			{
				pricing: 'null',
				description: '',
				imageURL: 'null',
				title: ''
			}
		],
		title: '',
		subtitle: ''
	};

	const dispatch = createEventDispatcher();
	import { createEventDispatcher } from 'svelte';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- {/* Icon Blocks */} -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	id="solution"
	class=" w-screen
px-4 py-8 transition-all ease-in
 lg:py-12

"
>
	<div class="mx-auto w-11/12 lg:w-[65%]">
		<!-- {/* Grid */} -->
		<div class="grid gap-12">
			<div>
				<h2 class="text-3xl font-bold lg:text-4xl">{solution.title}</h2>
				<p class="mt-3 text-muted-foreground">
					{solution.subtitle}
				</p>
			</div>
			<div class="space-y-6 lg:space-y-10">
				{#each solution.solutions as s}
					<!-- {/* Icon Block */} -->
					<div class="flex">
						<CircleCheck
							class="mt-2 h-6 w-6 flex-shrink-0 "
							style="
							 color: {siteData.primaryColor};"
						/>
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
