<script lang="ts">
  export let href: string;
  export let target = '_blank';
  export let rel = 'noreferrer';
  export let dark = false;
  export let clazz = '';
</script>

<!-- prettier-ignore -->
<a
        class={`${dark ? 'a-internal-dark' : 'a-internal'} ${clazz}`}
        {target}
        {rel}
        {href}><span class="underline"
><slot /></span></a>
