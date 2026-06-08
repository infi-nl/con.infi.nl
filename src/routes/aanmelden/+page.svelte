<script lang="ts">
  import { onMount } from 'svelte';
  import A from '$lib/components/A.svelte';
  import Socials from '$lib/components/Socials.svelte';
  import SimplePageContent from '$lib/components/SimplePageContent.svelte';
  import SimplePageHeader from '$lib/components/SimplePageHeader.svelte';

  // UTC voor simpelheid, het luistert ook weer niet zo nauw.
  const cutoffTimestamp = Date.UTC(2026, 5, 12);
  let showPostEventContent = false;
  onMount(() => {
    showPostEventContent = Date.now() >= cutoffTimestamp;
  });
</script>

<SimplePageHeader>Aanmelden Infi-Con 2026</SimplePageHeader>

<SimplePageContent>
  {#if showPostEventContent}
    <p>
      De <strong>2026 editie</strong> was op <strong>donderdag 11 juni</strong>
      en is helaas alweer voorbij! Je kunt nog terugkijken wat het <A href="/2026/programma">programma</A> was. Volg ons op socials om een seintje
      te krijgen voor volgende edities.
    </p>
    <Socials />
  {:else}
    <p>
      De <strong>2026 editie</strong> zal plaatsvinden op <strong>donderdag 11 juni</strong>
      van <strong>12:30 tot 17:00</strong> (<A href="/2026/programma">programma</A>) op kantoor bij Infi (Arthur van Schendelstraat 500,
      3511 MH, Utrecht).
    </p>
    <p>
      <strong>Aanmelden kan ook last-minute nog!</strong> Het formulier is gesloten maar je kunt ons gewoon even mailen op
      <strong><a href="mailto:community@infi.nl">community@infi.nl</a></strong> om te laten weten dat je er ook bij gaat zijn. Dan weten we waar
      we rekening mee kunnen houden qua aantallen.
    </p>
    <p>
      Als je al eerder was aangemeld: fijn als je jouw RSVP up to date houdt. Kun je toch echt niet komen? Stuur dan een kort mailtje naar <strong
        ><a href="mailto:community@infi.nl">community@infi.nl</a></strong
      > om het ons te laten weten.
    </p>
  {/if}
</SimplePageContent>
