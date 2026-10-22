<script lang="ts">
  import NavItem from '#lib/components/NavItem.svelte';
  import '../app.css';
</script>

<div class="flex min-h-screen flex-col bg-stone-900 bg-[url('/img/home-bg.jpg')] bg-cover bg-fixed bg-top text-white/90">
  <header class="bg-black/50 py-4">
    <nav class="mx-auto flex flex-wrap justify-center gap-2">
      <a class="mr-8 hidden bg-orange-500 p-1 font-bold lg:inline-block" href="/">
        <img src="/img/logo.png" alt="logo van Infi" class="h-8" /></a
      >
      <NavItem href="/aanmelden">Aanmelden</NavItem>
      <NavItem href="/2026/programma">Programma</NavItem>
      <NavItem href="/2026/praktisch">Praktisch</NavItem>
      <NavItem href="/over-ons">Over ons</NavItem>
      <NavItem href="/faq">F.A.Q.</NavItem>
      <NavItem href="/edities" clazz="ml-0 lg:ml-8">Alle Edities</NavItem>
    </nav>
  </header>

  <slot />

  <footer class="mt-auto">
    <div class="mt-8 bg-linear-to-r from-black to-black/80 py-4 opacity-80 shadow-inner">
      <div class="mx-auto max-w-5xl px-8">
        <a class="opacity-60 hover:text-orange-500 hover:opacity-100" href="https://infi.nl">infi.nl</a>
        |
        <a class="opacity-60 hover:text-orange-500 hover:opacity-100" href="mailto:community@infi.nl">community@infi.nl</a>
      </div>
    </div>
  </footer>
</div>
