import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog'

export default defineConfig({
  integrations: [
    starlightBlog(),
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
            directory: 'sdk',
          },
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
        },
        {
          label: 'Mise à jours',
          collapsed: true,
          autogenerate: {
            directory: 'updates',
            collapsed: true,
          }
        },
      ]
    }), 
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
