import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  base: '/Candela_QSG/',
  title: '暗烛快速入门指南',
  description: '',
  lastUpdated: true,

  themeConfig: {

    search: {
      provider: 'local'
    },

    footer: {
      message: '本文档为非官方翻译，仅供参考。原文件版权归原作者或版权所有者所有。翻译内容旨在帮助理解原文，并非官方认证或授权的翻译版本。',
      copyright: '译者不对任何由于使用本翻译文件而产生的直接或间接后果承担责任。'
    },

    nav: [
      { text: '暗烛快速入门指南', link: '/content/1' },
      { text: '准备工作',
        items: [
          { text: '介绍', link: '/content/2#2.1' },
          { text: '内容警告&建立游玩边界线', link: '/content/2#2.2' },
          { text: '如何使用本指南', link: '/content/2#2.3' },
        ]
      },
      { text: '法则',
        items: [
          { text: '世界法则', link: '/content/3#3.1' },
          { text: '魔法法则', link: '/content/3#3.2' },
          { text: '暗烛法则', link: '/content/3#3.3' },
        ]
      },
      { text: '机制',
        items: [
          { text: '准备工作', link: '/content/4#4.1' },
          { text: '骰子的运作', link: '/content/4#4.2' },
          { text: '行动等级', link: '/content/4#4.3' },
          { text: '驱动力', link: '/content/4#4.4' },
          { text: '镀金行动', link: '/content/4#4.5' },
          { text: '抵抗力', link: '/content/4#4.6' },
          { text: '技能', link: '/content/4#4.7' },
          { text: '掷骰(检定)&后果', link: '/content/4#4.8' },
          { text: '战斗', link: '/content/4#4.9' },
          { text: '创建角色', link: '/content/4#4.10' },
          { text: '人际、装备、伤害标记', link: '/content/4#4.11' },
          { text: '环', link: '/content/4#4.12' },
        ]
      },
      { text: '伤疤&“勋章”', link: '/content/5' },
      { text: '暗烛世界观',
        items: [
          { text: '-', link: '/content/6#6.1' },
        ]
      },
      { text: '词译',
        items: [
          { text: '职业', link: '/names/n1' },
          { text: '属性', link: '/names/n2' },
          { text: '名词', link: '/names/n3' },
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
          { text: '以后一定补.jpg', link: '/index' },
          // ...
        ],
      },
    ],
  },
});
