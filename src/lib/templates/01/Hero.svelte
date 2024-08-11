<script>
	// @ts-nocheck

	import { Badge } from '$lib/components/ui/badge';
	import * as Tooltip from '$lib/components/ui/tooltip';

	// @ts-nocheck

	import { Button } from '$lib/components/ui/button';
	import { colorClass, colorClassOutline } from '$lib/customUtils';
	import { ChevronDown, MousePointerClick } from 'lucide-svelte';
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	import * as Drawer from '$lib/components/ui/drawer';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	export let siteData;
	$: hero = siteData.hero || {
		tagline: '',
		heroImageURL: null,
		ctas: [
			{
				title: '',
				type: 'contact',
				content: 'null',
				buttonText: '',
				subtitle: ''
			},
			{
				type: '',
				buttonText: '',
				content: 'null',
				subtitle: '',
				title: ''
			}
		],
		headline: ''
	};
	let action = '';
	let ctaDrawer = false;
	let corr = {
		name: '',
		tel: '',
		email: '',
		message: ''
	};

	// $: console.log(siteData);

	//Save correspondence
	import { collection, addDoc, setDoc, doc } from 'firebase/firestore';
	import { db } from '$lib/firebaseConfig';
	import { toast } from 'svelte-sonner';
	async function saveCorrespondence(corr) {
		toast.loading('Submiting...');
		try {
			const docRef = await setDoc(doc(db, 'correspondence', siteData.id), { ...corr, cta: action });
			// console.log('Document written with ID: ', docRef.id);
			toast.dismiss();
			toast.success('Submitted successfully!');
		} catch (error) {
			console.error(error);
		}
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- {/* Hero */} -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	id="hero"
	class="relative h-screen w-screen overflow-hidden
	py-10 transition-all ease-in lg:py-0
"
>
	<div class="absolute bottom-20 left-0 flex w-full items-center justify-center lg:hidden">
		<Button class="mx-auto rounded-full px-4" variant="outline" size="sm"
			>Scroll Down
			<ChevronDown class="ml-2 size-4 animate-bounce" />
		</Button>
	</div>

	<!-- {/* Gradients */} -->
	<div aria-hidden="true" class="absolute -top-96 start-1/2 flex -translate-x-1/2 transform">
		<div
			class="h-[44rem] w-[25rem] -translate-x-[10rem] rotate-[-60deg] transform bg-gradient-to-r
			from-background/50 to-background blur-3xl"
		/>
		<div
			class="h-[50rem] w-[50rem] origin-top-left -translate-x-[15rem] -rotate-12
			rounded-full bg-gradient-to-tl from-primary-foreground via-primary-foreground
			to-background blur-3xl lg:w-[90rem]"
		/>
	</div>
	<!-- {/* End Gradients */} -->
	<div class="relative z-[5]">
		<div class="container py-10 lg:py-16">
			<div class="mx-auto w-full text-center lg:max-w-3xl">
				<!-- {/* Title */} -->
				<div class="mt-5">
					<h1 class="scroll-m-20 text-5xl font-extrabold tracking-normal lg:text-7xl">
						{hero.headline}
					</h1>
				</div>
				<!-- {/* End Title */} -->
				<div class="mt-5 lg:max-w-3xl">
					<p class="text-xl text-muted-foreground lg:text-3xl">
						{hero.tagline}
					</p>
					<!-- <p>
						{colorClass(siteData.primaryColor, siteData.primaryColorForeground)}
					</p> -->
				</div>
				<!-- {/* Buttons */} -->
				<div class="mt-8 flex justify-center gap-3">
					{#each hero.ctas as cta, i}
						<Button
							on:click={() => {
								//Open Drawer
								action = cta.type;
								ctaDrawer = true;
							}}
							size="lg"
							style="
			background-color: {siteData.primaryColor};
			 color: {siteData.primaryColorForeground};"
							>{cta.buttonText}
						</Button>
					{/each}
				</div>
				<!-- {/* End Buttons */} -->
			</div>
		</div>
	</div>
</div>

<!-- Contact Drawer -->
<Drawer.Root bind:open={ctaDrawer}>
	<Drawer.Content>
		<Drawer.Header>
			<Drawer.Title class="text-center">Thanks for visiting our site</Drawer.Title>
			<Drawer.Description>
				{#if action == 'contact'}
					<p class="text-center">Reach out to us</p>
				{/if}

				<div class="mx-auto mt-4 space-y-4 lg:w-1/2">
					<Input bind:value={corr.name} class="" type="text" placeholder="Your Name" />
					<Input bind:value={corr.email} class="" type="email" placeholder="Your Email" />
					<Input bind:value={corr.tel} class="" type="tel" placeholder="Your Phone Number" />
					<Textarea class="" bind:value={corr.message} placeholder="Your Message" rows={3} />
				</div>
			</Drawer.Description>
		</Drawer.Header>
		<Drawer.Footer class="lg:mx-auto lg:w-1/2">
			<Button
				on:click={(e) => {
					e.preventDefault();
					if (corr.name == '') {
						toast.error('Please enter a valid name');
					} else if (corr.tel == '') {
						toast.error('Please enter a valid phone number');
					} else if (corr.email == '') {
						toast.error('Please enter a valid email');
					} else if (corr.message == '') {
						toast.error('Please enter your message');
					} else {
						ctaDrawer = false;
						saveCorrespondence(corr)
							.then(() => {})
							.catch((e) => {});
					}
				}}>Submit</Button
			>
			<Drawer.Close>Cancel</Drawer.Close>
		</Drawer.Footer>
	</Drawer.Content>
</Drawer.Root>
