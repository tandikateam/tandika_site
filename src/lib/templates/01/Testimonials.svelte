<script>
	import { Button } from '$lib/components/ui/button';
	export let siteData;
	$: testimonials = siteData.testimonials || {
		subtitle: '',
		quotes: [
			{
				author: '',
				quote: '',
				imageURL: 'null'
			}
		],
		title: ''
	};
	import { MousePointerClick } from 'lucide-svelte';
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	import { Badge } from '$lib/components/ui/badge';
	const dispatch = createEventDispatcher();
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- {/* Hero */} -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	id="testimonials"
	class="relative w-screen overflow-hidden bg-background

	py-10 lg:container
  lg:py-16

"
>
	<!-- {/* Gradients */} -->
	<div aria-hidden="true" class="absolute -top-96 start-1/2 flex -translate-x-1/2 transform">
		<div
			class="h-[44rem] w-[25rem] -translate-x-[10rem] rotate-[-60deg] transform bg-gradient-to-b from-background/50 to-background blur-3xl"
		/>
		<div
			class="h-[50rem] w-[90rem] origin-top-left -translate-x-[15rem] -rotate-12 rounded-full bg-gradient-to-br from-primary-foreground via-primary-foreground to-background blur-3xl"
		/>
	</div>
	<!-- {/* End Gradients */} -->
	<div class="relative z-[5]">
		<div
			class="
		mx-auto w-11/12 px-4 lg:w-[65%]
		"
		>
			<div class="mx-auto">
				<p class="text-2xl font-extrabold tracking-tight lg:text-3xl">{testimonials.title}</p>
				<p class="mt-3 text-muted-foreground">{testimonials.subtitle}</p>
			</div>

			<div class="mt-5 grid grid-cols-1 gap-2 lg:grid-cols-2">
				{#each testimonials.quotes as q}
					<div class="h-min rounded-md border border-border bg-background px-4 py-6 shadow-none">
						<p class="text-base">
							<span class="mr-1 text-5xl font-extrabold text-primary">"</span>
							{q.quote}
						</p>
						<div class="mt-1 flex flex-col items-end justify-end">
							<p class="text-sm font-semibold">~ {q.author}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
