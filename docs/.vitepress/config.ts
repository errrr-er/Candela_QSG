import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  base: '/Candela_QSG/',
  title: '暗烛快速入门指南',
  description: '',

  themeConfig: {
    nav: [
      { text: '暗烛快速入门指南', link: '/1' },
      { text: '准备工作', link: '/2' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: '暗烛快速入门指南', link: '/1' },
          { text: '准备工作', link: '/2' },
          // ...
        ],
      },
    ],
  },
});
