<script>
	// @ts-nocheck

	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import {
		BriefcaseIcon,
		FlowerIcon,
		HeartIcon,
		LightbulbIcon,
		MountainSnow,
		SearchIcon,
		SettingsIcon
	} from 'lucide-svelte';
	import { page } from '$app/stores';
	// $: console.log($page);
</script>

<!-- {/* Hero */} -->
<div class="relative overflow-hidden">
	<div class="container py-24 lg:py-32">
		<div class="text-center">
			<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Ooops!</h1>
			<p class="mt-3 text-2xl font-semibold text-muted-foreground">{$page.error.message}</p>
			<p class="mt-3 text-xl text-muted-foreground">It's not you, it's us.</p>

			<div class="relative mx-auto mt-7 max-w-xl sm:mt-12">
				<!-- {/* Form */} -->
				<form>
					<div class="relative z-10 flex space-x-3 p-3">
						<Button
							on:click={() => {
								history.back();
							}}
							class="mx-auto">Go to a Safe Place</Button
						>
					</div>
				</form>
				<!-- {/* End Form */} -->
				<!-- {/* SVG Element */} -->
				<div class="absolute end-0 top-0 hidden -translate-y-12 translate-x-20 md:block">
					<svg
						class="h-auto w-16 text-[#69306D]"
						width={121}
						height={135}
						viewBox="0 0 121 135"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
							stroke="currentColor"
							strokeWidth={10}
							strokeLinecap="round"
						/>
						<path
							d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
							stroke="currentColor"
							strokeWidth={10}
							strokeLinecap="round"
						/>
						<path
							d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
							stroke="currentColor"
							strokeWidth={10}
							strokeLinecap="round"
						/>
					</svg>
				</div>
				<!-- {/* End SVG Element */} -->
				<!-- {/* SVG Element */} -->
				<div class="absolute bottom-0 start-0 hidden -translate-x-32 translate-y-10 md:block">
					<svg
						class="h-auto w-40 text-[#69306D]"
						width={347}
						height={188}
						viewBox="0 0 347 188"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
							stroke="currentColor"
							strokeWidth={7}
							strokeLinecap="round"
						/>
					</svg>
				</div>
				<!-- {/* End SVG Element */} -->
			</div>
		</div>
	</div>
</div>
<!-- {/* End Hero */} -->
