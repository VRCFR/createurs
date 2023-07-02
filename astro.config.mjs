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
      label: 'Avatars',
      autogenerate: {
        directory: 'avatars'
      }
    },{
      label:'Mondes',
      autogenerate:{
        directory: 'worlds'
      }
    }
    ]
  }), markdoc()],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});