<script lang="ts">
	export let href: string;
	export let clazz: string = '';
	import { page } from '$app/stores';
	$: text = $page.url.pathname == href ? 'text-black underline' : 'text-inherit';
</script>

<a
	{href}
	class={`inline-block px-4 py-2 bg-white/30 hover:bg-white/40 transition-all ${text} ${clazz}`}
>
	<slot />
</a>
