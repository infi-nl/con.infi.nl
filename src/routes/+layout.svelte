<script lang="ts">
  import NavItem from '$lib/components/NavItem.svelte';
  import '../app.css';
</script>

<div class="min-h-screen flex flex-col bg-stone-900 text-white/90 bg-cover bg-[url('/img/home-bg.jpg')]">
  <nav class="mx-auto px-4 my-8 flex flex-wrap gap-2">
    <a class="inline-block px-4 py-2 bg-orange-500 mr-4" href="/">INFI</a>
    <NavItem href="/">HOME</NavItem>
    <NavItem href="/aanmelden">AANMELDEN</NavItem>
    <!-- <NavItem href="/2024/programma">PROGRAMMA</NavItem> -->
    <!-- <NavItem href="/2024/praktisch">PRAKTISCH</NavItem> -->
    <NavItem href="/over-ons">OVER ONS</NavItem>
    <NavItem href="/faq">F.A.Q.</NavItem>
    <NavItem href="/edities" clazz="ml-4">VOORGAANDE EDITIES</NavItem>
  </nav>

  <slot />
</div>
