import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  base: '/Candela_QSG/',
  title: '暗烛快速入门指南',
  description: '',

  themeConfig: {
    nav: [
      { text: '暗烛快速入门指南', link: '/1' },
      { text: '准备工作',
        items: [
          { text: '介绍', link: '/2#2.1' },
          { text: '内容警告&建立游玩边界线', link: '/2#2.2' },
          { text: '如何使用本指南', link: '/2#2.3' },
        ]
      },
      { text: '法则',
        items: [
          { text: '世界法则', link: '/3#3.1' },
          { text: '魔法法则', link: '/3#3.2' },
          { text: '暗烛法则', link: '/3#3.3' },
        ]
      },
      { text: '机制',
        items: [
          { text: '准备工作', link: '/4#4.1' },
          { text: '骰子的运作', link: '/4#4.2' },
          { text: '行动等级', link: '/4#4.3' },
          { text: '驱动力', link: '/4#4.4' },
          { text: '镀金行动', link: '/4#4.5' },
          { text: '抵抗力', link: '/4#4.6' },
          { text: '技能', link: '/4#4.7' },
          { text: '掷骰(检定)&后果', link: '/4#4.8' },
          { text: '战斗', link: '/4#4.9' },
          { text: '创建角色', link: '/4#4.10' },
          { text: '人际、装备、伤害标记', link: '/4#4.11' },
          { text: '环', link: '/4#4.12' },
        ]
      },
      { text: '伤疤&“勋章”', link: '/5' },
      { text: '暗烛世界观',
        items: [
          { text: '-', link: '/6#6.1' },
        ]
      },
      
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
          { text: '准备工作',
            items: [
              { text: '介绍', link: '/2#2.1' },
              { text: '内容警告&建立游玩边界线', link: '/2#2.2' },
              { text: '如何使用本指南', link: '/2#2.3' },
            ]
          },
          { text: '法则',
            items: [
              { text: '世界法则', link: '/3#3.1' },
              { text: '魔法法则', link: '/3#3.2' },
              { text: '暗烛法则', link: '/3#3.3' },
            ]
          },
          { text: '机制',
            items: [
              { text: '准备工作', link: '/4#4.1' },
              { text: '骰子的运作', link: '/4#4.2' },
              { text: '行动等级', link: '/4#4.3' },
              { text: '驱动力', link: '/4#4.4' },
              { text: '镀金行动', link: '/4#4.5' },
              { text: '抵抗力', link: '/4#4.6' },
              { text: '技能', link: '/4#4.7' },
              { text: '掷骰(检定)&后果', link: '/4#4.8' },
              { text: '战斗', link: '/4#4.9' },
              { text: '创建角色', link: '/4#4.10' },
              { text: '人际、装备、伤害标记', link: '/4#4.11' },
              { text: '环', link: '/4#4.12' },
            ]
          },
          { text: '伤疤&“勋章”', link: '/5' },
          { text: '暗烛世界观',
            items: [
              { text: '-', link: '/6#6.1' },
            ]
          },
          // ...
        ],
      },
    ],
  },
});
