<script>
	import * as Accordion from '$lib/components/ui/accordion';
	export let siteData;
	$: faqs = siteData.faqs || {
		title: '',
		faqs: [
			{
				answer: '',
				question: ''
			}
		],
		subtitle: ''
	};
	import { MousePointerClick } from 'lucide-svelte';
	import { createEventDispatcher } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { fade } from 'svelte/transition';
	import { Badge } from '$lib/components/ui/badge';
	const dispatch = createEventDispatcher();
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- {/* faqs */} -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	id="faqs"
	class="w-screen bg-background pb-20 pt-16
  lg:container
"
>
	<div class="mx-auto w-11/12 px-4 lg:w-[65%]">
		<h2 class="text-3xl font-bold lg:text-4xl">{faqs.title}</h2>
		<p class="mt-3 text-muted-foreground">
			{faqs.subtitle}
		</p>
	</div>

	<div class="mx-auto my-4 w-11/12 text-start lg:w-[65%]">
		{#each faqs.faqs as f, i}
			<Accordion.Root>
				<Accordion.Item value="item-{i + 1}">
					<Accordion.Trigger class="text-start">{f.question}</Accordion.Trigger>
					<Accordion.Content>
						{f.answer}
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
		{/each}
	</div>
</div>
