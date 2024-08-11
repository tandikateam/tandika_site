<script>
	//@ts-nocheck
	import ScrollArea from '$lib/components/ui/scroll-area/scroll-area.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import Contact from './Contact.svelte';
	import FaQs from './FAQs.svelte';
	import Features from './Features.svelte';
	import Footer from './Footer.svelte';
	import Hero from './Hero.svelte';
	import HowItWorks from './HowItWorks.svelte';
	import Nav from './Nav.svelte';
	import Problem from './Problem.svelte';
	import ProblemStats from './ProblemStats.svelte';
	import Solution from './Solution.svelte';
	import Team from './Team.svelte';
	import Testimonials from './Testimonials.svelte';
	export let editing = false;
	export let activeSection = null;
	export let siteData = {};

	function selectSection(section) {
		if (editing && activeSection != section) {
			activeSection = section;
		}
	}

	function deselectSection() {
		activeSection = null;
	}
	// $: console.log(schema, 'FROM INDEX');
</script>

<div class=" w-screen">
	<ScrollArea
		class=" h-screen
	
	"
	>
		<div class="">
			<Nav bind:siteData />

			<Hero bind:siteData />
			<Separator />
			<Problem bind:siteData />
			<ProblemStats bind:siteData />
			<Separator />
			<Solution bind:siteData />
			<Separator class="" />
			<Features bind:siteData />
			<Separator />
			<HowItWorks bind:siteData />
			<Separator />
			<Team bind:siteData />
			<Separator />
			<Contact bind:siteData />
			<Separator />
			<FaQs bind:siteData />
			<Testimonials bind:siteData />
			<Footer bind:siteData />
		</div>
	</ScrollArea>
</div>
