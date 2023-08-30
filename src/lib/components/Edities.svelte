<script>
  import AnchorButton from './AnchorButton.svelte';
</script>

<!-- prettier-ignore -->
<div class="flex flex-col gap-4 lg:gap-8">
  <div class="flex items-center gap-2 md:gap-4 lg:gap-8">
    <div class="w-32 items-center justify-center hidden md:flex">
      <div class="border-8 border-orange-500 bg-orange-50 rounded-full w-20 h-20 text-center flex flex-col justify-center text-xl font-bold">2018</div>
    </div>
    <div>
      <div class="my-1 text-2xl">Infi-Con 2018 (intern)</div>
      <div class="my-1 text-xl">Locatie: Utrecht. Bezoekers: ~35.</div>
      <div class="my-1 text-lg">Meer lezen? Zie de “<a href="/over-ons">Over Ons</a>” pagina.</div>
    </div>
  </div>
  <div class="flex items-center gap-2 md:gap-4 lg:gap-8">
    <div class="w-32 items-center justify-center hidden md:flex">
      <div class="border-[12px] border-orange-500 bg-orange-200 rounded-full w-32 h-32 text-center flex flex-col justify-center text-4xl font-bold">
        2019
      </div>
    </div>
    <div>
      <div class="my-1 text-3xl">Infi-Con Pro 2019</div>
      <div class="my-1 text-xl">Locatie: Utrecht. Bezoekers: ~75.</div>
      <div class="my-1">
        <AnchorButton href="/2019">2019 Home</AnchorButton>
        <AnchorButton href="/2019/programma">Programma</AnchorButton>
        <AnchorButton href="https://www.youtube.com/watch?v=KAuXDjtswpM&list=PLmKkHHpMpo_iQa1WDm9jFmtPBLieXeBHL" openInNew={true}>YouTube Playlist</AnchorButton>
      </div>
    </div>
  </div>
  <div class="flex items-center gap-2 md:gap-4 lg:gap-8">
    <div class="w-32 items-center justify-center hidden md:flex">
      <div class="border-[12px] border-orange-500 bg-orange-100 rounded-full w-28 h-28 text-center flex flex-col justify-center text-2xl font-bold">
        2020
      </div>
    </div>
    <div>
      <div class="my-1 text-3xl">Infi-Con Pro 2020 (Remote)</div>
      <div class="my-1 text-xl">Uitzending vanuit Amsterdam. Deelnemers: ~55.</div>
      <div class="my-1">
        <AnchorButton href="/2020">2020 Home</AnchorButton>
        <AnchorButton href="/2020/programma">Programma</AnchorButton>
        <AnchorButton href="https://www.youtube.com/playlist?list=PLmKkHHpMpo_js1gwDJgqvNkVUIlONF-uT" openInNew={true}>YouTube Playlist</AnchorButton>
      </div>
    </div>
  </div>
  <div class="flex items-center gap-2 md:gap-4 lg:gap-8 opacity-50 saturate-50">
    <div class="w-32 items-center justify-center hidden md:flex">
      <div class="border-[2px] border-orange-500 bg-orange-100 rounded-full w-14 h-14 text-center flex flex-col justify-center text-base">
        2021
      </div>
    </div>
    <div>
      <div class="my-1 text-3xl block md:hidden">Infi-Con Pro 2021</div>
      <div class="my-1 text-xl">Geannuleerd wegens o.a. COVID-19 maatregelen.</div>
    </div>
  </div>
  <div class="flex items-center gap-2 md:gap-4 lg:gap-8">
    <div class="w-32 items-center justify-center hidden md:flex">
      <div class="border-[12px] border-orange-500 bg-orange-200 rounded-full w-32 h-32 text-center flex flex-col justify-center text-4xl font-bold">
        2022
      </div>
    </div>
    <div>
      <div class="my-1 text-3xl">Infi-Con Pro 2022</div>
      <div class="my-1 text-xl">Locatie: Utrecht. Bezoekers: ~80.</div>
      <div class="my-1">
        <AnchorButton href="/2022">2022 Home</AnchorButton>
        <AnchorButton href="/2022/programma">Programma</AnchorButton>
        <AnchorButton href="https://www.youtube.com/playlist?list=PLmKkHHpMpo_gfmH1U97UiSwoXvDkX9Zyl" openInNew={true}>YouTube Playlist</AnchorButton>
      </div>
    </div>
  </div>
  <div class="flex items-center gap-2 md:gap-4 lg:gap-8 opacity-50 saturate-50">
    <div class="w-32 items-center justify-center hidden md:flex">
      <div class="border-[2px] border-orange-500 bg-orange-100 rounded-full w-14 h-14 text-center flex flex-col justify-center text-base">
        2023
      </div>
    </div>
    <div>
      <div class="my-1 text-3xl">Infi-Con Pro 2023</div>
      <div class="my-1 text-xl">Weer een jaartje pauze, maar Infi-Con zal terugkeren!</div>
    </div>
  </div>
</div>
