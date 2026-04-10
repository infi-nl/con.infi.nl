<script>
  import A from '$lib/components/A.svelte';
  import SimpleIcon from '$lib/components/SimpleIcon.svelte';
  import { siRss, siMastodon, siBluesky, siInstagram, siGithub } from 'simple-icons';
</script>

<div class="flex flex-wrap gap-8 justify-center mx-20">
  <div><A clazz="bg-black/10 p-8 inline-flex items-center gap-2" href="https://infi.nl/blog"><SimpleIcon icon={siRss} />Ons blog</A></div>
  <div>
    <A clazz="bg-black/10 p-8 inline-flex items-center gap-2" href="https://mastodon.social/@infinl@mastodon.nl"
      ><SimpleIcon icon={siMastodon} /> Mastodon</A
    >
  </div>
  <div>
    <A clazz="bg-black/10 p-8 inline-flex items-center gap-2" href="https://bsky.app/profile/infi.nl"
      ><SimpleIcon icon={siBluesky} /> Bluesky</A
    >
  </div>
  <div>
    <A clazz="bg-black/10 p-8 inline-flex items-center gap-2" href="https://www.instagram.com/infi.nl"
      ><SimpleIcon icon={siInstagram} /> Instagram</A
    >
  </div>
  <div><A clazz="bg-black/10 p-8 inline-block" href="https://www.linkedin.com/company/infinl">LinkedIn</A></div>
  <div>
    <A clazz="bg-black/10 p-8 inline-flex items-center gap-2" href="https://github.com/infi-nl"><SimpleIcon icon={siGithub} /> GitHub</A>
  </div>
</div>
