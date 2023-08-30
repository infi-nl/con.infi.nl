<script lang="ts">
  export let href: string;
  export let clazz: string = '';
  export let openInNew = false;
</script>

<a
  class={`
    inline-block py-1 px-4 mb-1 text-base
    bg-gradient-to-b from-slate-500 to-slate-600 
    hover:from-slate-700 hover:to-slate-700 
    text-white no-underline
    ${clazz}
  `}
  target="{openInNew ? '_blank' : ''}"
  {href}
>
  <slot />
  {#if openInNew}<sup class="text-xs no-underline">↗</sup>{/if}
</a>
