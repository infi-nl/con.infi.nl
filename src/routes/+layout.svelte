<script lang="ts">
  import NavItem from '$lib/components/NavItem.svelte';
  import '../app.css';
</script>

<div class="min-h-screen flex flex-col bg-stone-900 text-white/90 bg-cover bg-[url('/img/home-bg.jpg')]">
  <nav class="mx-auto px-4 my-8 flex flex-wrap gap-2">
    <a class="px-4 py-2 bg-orange-500 font-bold mr-8 hidden lg:inline-block" href="/">INFI</a>
    <NavItem href="/">HOME</NavItem>
    <NavItem href="/aanmelden">AANMELDEN</NavItem>
    <!-- <NavItem href="/2024/programma">PROGRAMMA</NavItem> -->
    <!-- <NavItem href="/2024/praktisch">PRAKTISCH</NavItem> -->
    <NavItem href="/over-ons">OVER ONS</NavItem>
    <NavItem href="/faq">F.A.Q.</NavItem>
    <NavItem href="/edities" clazz="ml-0 lg:ml-8">VOORGAANDE EDITIES</NavItem>
  </nav>

  <slot />

  <footer class="mt-auto py-8 bg-gradient-to-r from-neutral-900 to-neutral-800 shadow-inner">
    <div class="mx-auto max-w-[1024px] px-8">
      <a class="hover:text-orange-500 hover:opacity-100 opacity-60" href="https://infi.nl">infi.nl</a>
      |
      <a class="hover:text-orange-500 hover:opacity-100 opacity-60" href="mailto:community@infi.nl">community@infi.nl</a>
    </div>
  </footer>
</div>
