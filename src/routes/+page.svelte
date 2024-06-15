<script lang="ts">
	import { page } from "$app/stores";
	import type { PageData } from "./$types";

	export let data: PageData;

	console.log($page.url);
</script>

<p>
	{data.greeting}
</p>
