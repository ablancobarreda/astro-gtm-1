import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';

import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [
    partytown({
      config: {
        forward: ["dataLayer.push"],
        resolveUrl: (url) => {
          const proxyUrl = new URL('https://coruscating-peony-1ea3c6.netlify.app/proxy');
          proxyUrl.searchParams.append('url', url.href);
          return proxyUrl;
        },
      },
    }),
  ],

  output: 'server',
  adapter: netlify(),
});