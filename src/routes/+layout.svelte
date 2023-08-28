<script lang="ts">
  import NavItem from '$lib/components/NavItem.svelte';
  import '../app.css';
</script>

<div class="min-h-screen flex flex-col bg-stone-900 text-white/90 bg-top bg-cover bg-[url('/img/home-bg.jpg')]">
  <header class="bg-black/50 py-4">
    <nav class="mx-auto flex flex-wrap gap-2 justify-center">
      <a class="p-1 bg-orange-500 font-bold mr-8 hidden lg:inline-block" href="/">
        <img src="/img/logo.png" alt="logo van Infi" class="h-[32px]" /></a
      >
      <NavItem href="/">HOME</NavItem>
      <NavItem href="/aanmelden">AANMELDEN</NavItem>
      <!-- <NavItem href="/2024/programma">PROGRAMMA</NavItem> -->
      <!-- <NavItem href="/2024/praktisch">PRAKTISCH</NavItem> -->
      <NavItem href="/over-ons">OVER ONS</NavItem>
      <NavItem href="/faq">F.A.Q.</NavItem>
      <NavItem href="/edities" clazz="ml-0 lg:ml-8">VOORGAANDE EDITIES</NavItem>
    </nav>
  </header>

  <slot />

  <footer class="mt-auto">
    <div class="mt-8 py-4 bg-gradient-to-r from-black/100 to-black/80 shadow-inner opacity-80">
      <div class="mx-auto max-w-[1024px] px-8">
        <a class="hover:text-orange-500 hover:opacity-100 opacity-60" href="https://infi.nl">infi.nl</a>
        |
        <a class="hover:text-orange-500 hover:opacity-100 opacity-60" href="mailto:community@infi.nl">community@infi.nl</a>
      </div>
    </div>
  </footer>
</div>
