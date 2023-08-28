<script lang="ts">
  export let href: string;
  export let clazz: string = '';
  import { page } from '$app/stores';
  $: isForPreviousEdition = ['/2019', '/2020', '/2022'].some((x) => $page.url.pathname.startsWith(x));
  $: isActive = $page.url.pathname == href || (isForPreviousEdition && href === '/edities');
  $: text = isActive ? 'text-black bg-white/30' : '';
</script>

<a {href} class={`inline-block px-4 py-2 font-bold bg-white/20 hover:bg-white/30 transition-all ${text} ${clazz}`}>
  <slot />
</a>
