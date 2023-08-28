<script lang="ts">
  import { page } from '$app/stores';
</script>

<div class="max-w-full mx-auto mb-32 px-4 py-16 pb-32 mt-8 bg-black/70 min-w-[80vw] rounded-xl text-center">
  {#if $page.status === 404}
    <h1 class="text-4xl font-bold">404: Niets te zien!</h1>
    <p class="py-4 text-xl mt-4">Er is op deze link momenteel niets te zien. Sorry!</p>
  {:else}
    <h1 class="text-4xl font-bold">Oeps!</h1>
    <p class="py-4 text-xl mt-4">Sorry, er ging iets fout. Het ligt aan ons, niet aan jou! Probeer het later nog eens, s.v.p.</p>
  {/if}
</div>
