<script lang="ts">
  interface Props {
    icon: { path: string; title: string };
    class?: string;
  }

  let { icon, class: className = 'inline-block w-5 h-5' }: Props = $props();
</script>

<svg role="img" viewBox="0 0 24 24" fill="currentColor" aria-label={icon.title} class={className}><path d={icon.path} /></svg>
