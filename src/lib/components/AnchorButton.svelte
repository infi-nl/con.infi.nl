<script lang="ts">
  export let href: string;
  export let clazz: string = '';
  export let openInNew = false;
</script>

<a
  class={[
    'mb-1 inline-block bg-linear-to-b from-slate-500 to-slate-600 px-4 py-1 text-base text-white no-underline hover:from-slate-700 hover:to-slate-700',
    clazz,
  ]}
  target={openInNew ? '_blank' : ''}
  {href}
>
  <slot />
</a>
