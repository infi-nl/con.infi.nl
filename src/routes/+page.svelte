<script lang="ts">
  import Socials from '$lib/components/Socials.svelte';
  import Core2026Content from './2026/Core2026Content.svelte';
</script>

<div class="mx-auto mb-16 max-w-5xl mt-4 lg:mt-16">
  <div class="mx-4 p-4 lg:p-8 lg:px-32 rounded-lg bg-white/90 text-stone-800">
    <article class="prose lg:prose-lg max-w-[80ch] text-center">
      <h1>Infi-Con</h1>

      <Core2026Content />

      <hr class="border-black/20" />

      <p>
        Ruwweg iedere één a twee jaar (wanneer het goed voelt) organiseren we <strong>Infi-Con</strong>:<br />
        Onze kennisdelingsmiddag, opengesteld voor alle liefhebbers. Met sprekers van Infi zelf, een goede keynote van een bekende (gast)spreker
        uit de community en, als het past in de planning, aanvullende gastsprekers.
      </p>

      <p>
        Onze <a href="/edities">voorgaande edities</a> waren in 2018 (voor onszelf), <a href="/2019">2019</a>, <a href="/2020">2020</a>
        (locked down), <a href="/2022">2022</a> en <a href="/2026">2026</a>. Geen vast ritme, maar we doen het graag, dus in de toekomst kun
        je uiteraard nieuwe edities verwachten.
      </p>

      <h2>Op de hoogte blijven?</h2>

      <p>Dat kan! Volg onze updates op een platform naar jouw keuze!</p>

      <Socials />
    </article>
  </div>
</div>
