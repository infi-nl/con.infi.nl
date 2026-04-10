<script lang="ts">
  import NavItem from '$lib/components/NavItem.svelte';
  import '../app.css';
</script>

<div class="min-h-screen flex flex-col bg-stone-900 text-white/90 bg-top bg-cover bg-fixed bg-[url('/img/home-bg.jpg')]">
  <header class="bg-black/50 py-4">
    <nav class="mx-auto flex flex-wrap gap-2 justify-center">
      <a class="p-1 bg-orange-500 font-bold mr-8 hidden lg:inline-block" href="/">
        <img src="/img/logo.png" alt="logo van Infi" class="h-[32px]" /></a
      >
      <NavItem href="/">Home</NavItem>
      <NavItem href="/aanmelden">Aanmelden</NavItem>
      <NavItem href="/2026/programma">Programma</NavItem>
      <!-- <NavItem href="/2024/praktisch">Praktisch</NavItem> -->
      <NavItem href="/over-ons">Over ons</NavItem>
      <NavItem href="/faq">F.A.Q.</NavItem>
      <NavItem href="/edities" clazz="ml-0 lg:ml-8">Voorgaande edities</NavItem>
    </nav>
  </header>

  <slot />

  <footer class="mt-auto">
    <div class="mt-8 py-4 bg-linear-to-r from-black to-black/80 shadow-inner opacity-80">
      <div class="mx-auto max-w-[1024px] px-8">
        <a class="hover:text-orange-500 hover:opacity-100 opacity-60" href="https://infi.nl">infi.nl</a>
        |
        <a class="hover:text-orange-500 hover:opacity-100 opacity-60" href="mailto:community@infi.nl">community@infi.nl</a>
      </div>
    </div>
  </footer>
</div>
