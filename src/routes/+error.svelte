<script lang="ts">
  import { page } from '$app/state';
</script>

<div class="mx-auto mt-8 mb-32 max-w-full min-w-[80vw] rounded-xl bg-black/70 px-4 py-16 pb-32 text-center">
  {#if page.status === 404}
    <h1 class="text-4xl font-bold">404: Niets te zien!</h1>
    <p class="mt-4 py-4 text-xl">Er is op deze link momenteel niets te zien. Sorry!</p>
  {:else}
    <h1 class="text-4xl font-bold">Oeps!</h1>
    <p class="mt-4 py-4 text-xl">Sorry, er ging iets fout. Het ligt aan ons, niet aan jou! Probeer het later nog eens, s.v.p.</p>
  {/if}
</div>
