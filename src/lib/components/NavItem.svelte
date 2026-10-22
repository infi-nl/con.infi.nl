<script lang="ts">
  import { page } from '$app/state';
  import type { Snippet } from 'svelte';

  let { href, clazz = '', children }: { href: string; clazz?: string; children: Snippet } = $props();
  let isForPreviousEdition = $derived(['/2019', '/2020', '/2022'].some((x) => page.url.pathname.startsWith(x)));
  let isActive = $derived(page.url.pathname == href || (isForPreviousEdition && href === '/edities'));
  let text = $derived(isActive ? 'text-black bg-white/30' : '');
</script>

<a {href} class={`inline-block px-4 py-2 font-bold uppercase bg-white/20 hover:bg-white/30 transition-all ${text} ${clazz}`}
  >{@render children()}</a
>
