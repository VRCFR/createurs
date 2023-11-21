import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

export default defineConfig({
  integrations: [
    starlightBlog(),
    starlight({
      title: 'VRChat France',
      customCss: process.env.NO_GRADIENTS ? [] : ['./src/assets/landing.css'],
      locales: {
        root: {
          label: "Français",
          lang: "fr"
        }
      },
      social: {
        discord: 'https://discord.gg/vrchatfrance'
      },
      components: {
        MarkdownContent: 'starlight-blog/overrides/MarkdownContent.astro',
        Sidebar: 'starlight-blog/overrides/Sidebar.astro',
        ThemeSelect: 'starlight-blog/overrides/ThemeSelect.astro',
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
              autogenerate: { directory: 'to-know', collapsed: true, },
            },
            {
              label: 'En avant !',
              autogenerate: { directory: 'starting', collapsed: true, },
            }
          ]


        },
        {
          label: 'SDK',
          collapsed: true,
          autogenerate: {
            collapsed: true,
            directory: 'SDK',
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
