import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';

export default defineConfig({
  integrations: [
    partytown({
      config: {
        forward: ["dataLayer.push"],
        resolveUrl: (url) => {
          const proxyUrl = new URL('https://astro-gtm.netlify.app/proxy');
          proxyUrl.searchParams.append('url', url.href);
          return proxyUrl;
        },
      },
    }),
  ],
});