import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import markdoc from "@astrojs/markdoc";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  integrations: [
    starlight({
      title: 'VRChat France',
      locales: {
        root: {
          label: "Français",
          lang: "fr"
        }
      },
      social: {
        discord: 'https://discord.gg/vrchatfrance'
      },
      sidebar: [
        {
          label: 'Pour commencer',
          collapsed: true,
          autogenerate: { directory: 'guides', collapsed: true, },
          
        },
        {
          label: 'SDK',
          collapsed: true,
          autogenerate: {
            directory: 'sdk',
            collapsed: true,
          }
        },
        {
          label: 'Avatars',
          collapsed: true,
          autogenerate: {
            directory: 'avatars',
            collapsed: true,
          }
        },
        {
          label: 'Mondes',
          collapsed: true,
          autogenerate: {
            directory: 'worlds',
            collapsed: true,
          }
        },
        {
          label: 'Plateforme',
          collapsed: true,
          autogenerate: {
            directory: 'platform',
            collapsed: true,
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
