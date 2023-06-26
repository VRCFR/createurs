import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'VRChat France Créateurs',
    social: {
      discord: 'https://discord.gg/vrchatfrance'
    },
    sidebar: [{
      label: 'Pour commencer',
      autogenerate: {
        directory: 'guides'
      }
    }, {
      label: 'Utilisation de UdonSharp',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Débuter sur UdonSharp',
        link: 'usharp/start'
      }
      ]
    }]
  }), markdoc()],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});