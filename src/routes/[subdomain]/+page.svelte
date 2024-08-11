<script>
	import Index from '$lib/templates/01/Index.svelte';

	export let data;
	$: siteData = data?.siteData;
</script>

<svelte:head>
	<title>{siteData?.startup_name}</title>
	<link rel="icon" href={siteData?.startup_logo} />
</svelte:head>

<Index {siteData} />
