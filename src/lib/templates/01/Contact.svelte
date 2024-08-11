<script>
	// @ts-nocheck

	import {
		Building2Icon,
		ThumbsUpIcon,
		Users2Icon,
		BriefcaseIcon,
		FlowerIcon,
		HeartIcon,
		LightbulbIcon,
		MountainSnow,
		SearchIcon,
		SettingsIcon
	} from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	export let siteData;
	// $: console.log(siteData.contact);
	let mainContact = siteData.mainContact;

	import { MousePointerClick } from 'lucide-svelte';
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	import { Badge } from '$lib/components/ui/badge';
	import { colorClass, colorClassOutline } from '$lib/customUtils';
	const dispatch = createEventDispatcher();
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- {/* Hero */} -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	id="contact"
	class="
		w-screen px-4 pb-12 pt-8
 transition-all ease-in lg:container

"
	style="background-color: {siteData.primaryColor}; color: {siteData.primaryColorForeground};"
>
	<div class="py-2 lg:py-10">
		<div class="text-center">
			<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
				{mainContact.title}
			</h1>
			<p class="mt-3 text-xl">
				{mainContact.subtitle}
			</p>

			<div class=" mx-auto mt-7 flex max-w-xl items-center justify-center sm:mt-5">
				<Button variant="ghost" href="#footer" class="shadow-2xl">Contact Us</Button>
			</div>
		</div>
	</div>
</div>
<!-- {/* End Hero */} -->
