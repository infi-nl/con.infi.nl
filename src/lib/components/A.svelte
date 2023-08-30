<script lang="ts">
    export let href: string;
    export let rel = 'noreferrer';
    export let dark = false;
</script>

<!-- prettier-ignore -->
<a
        class={dark ? 'a-internal-dark' : 'a-internal'}
        target="_blank"
        {rel}
        {href}><span class="underline"
><slot /></span><sup class="text-xs no-underline">↗</sup></a>