import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    paths: {
      // Documentation typically wants you to include the repository
      // name in non-dev environments, because GitHub.io Pages sites
      // serve under a specific path. However, we skip that, because
      // we intend to serve the GitHub pages site with a DNS record
      // on our own domain anyway.
      base: '',
    },
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: false,
      strict: true
    }),
  },
};

export default config;
