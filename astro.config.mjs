import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
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
          label: 'Guides',
          items: [
            {
              label: 'Bien démarrer',
              autogenerate: { directory: 'guides', collapsed: true, },
            },
            {
              label: 'A savoir !',
              autogenerate: { directory: 'to-know', collapsed: true,},
            },
          ]
          
        },
        {
          label: 'SDK',
          collapsed: true,
          autogenerate: {
            collapsed: true,
            directory: 'SDK',
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
    sitemap()
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
