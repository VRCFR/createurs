import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import markdoc from "@astrojs/markdoc";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  integrations: [
    starlight({
      title: 'VRChat France Créateurs',
      social: {
        discord: 'https://discord.gg/vrchatfrance'
      },
      sidebar: [
        {
          label: 'Pour commencer',
          autogenerate: { directory: 'guides' }
        },
        {
          label: 'SDK',
          autogenerate: {
            directory: 'sdk',
            collapsed: true
          }
        },
        {
          label: 'Avatars',
          autogenerate: {
            directory: 'avatars'
          }
        },
        {
          label: 'Mondes',
          autogenerate: {
            directory: 'worlds'
          }
        },
        {
          label: 'Plateforme',
          autogenerate: {
            directory: 'platform'
          }
        }
      ]
    }), 
    markdoc(), 
    sitemap()
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
