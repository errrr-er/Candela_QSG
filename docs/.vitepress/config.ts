import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'zh-Hans',
  base: '/Candela_QSG/',
  title: '暗烛快速入门指南',
  description: '',

  themeConfig: {
    
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',

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
      { text: '伤疤&"勋章"', link: '/content/5' },
      { text: '暗烛世界观',
        items: [
          { text: '费尔兰', link: '/content/6#6.1' },
          { text: '最后的大型战争', link: '/content/6#6.2' },
          { text: '哈尔的语言', link: '/content/6#6.3' },
          { text: '新费尔城', link: '/content/6#6.4' },
          { text: '三权分立', link: '/content/6#6.5' },
          { text: '旧费尔', link: '/content/6#6.6' },
          { text: '灯塔', link: '/content/6#6.7' },
          { text: '大裂谷', link: '/content/6#6.8' },
          { text: '远乡', link: '/content/6#6.9' },
          { text: '异乡', link: '/content/6#6.10' },
          { text: '新费尔的地区', link: '/content/6#6.11' },
          { text: '费尔兰的地标', link: '/content/6#6.12' },
        ]
      },
      { text: '词译',
        items: [
          { text: '职业', link: '/names/n1' },
          { text: '属性', link: '/names/n2' },
          { text: '名词', link: '/names/n3' },
        ]
      },
    ],

    sidebar: [
      { text: '暗烛快速入门指南', link: '/content/1' },
      { text: '准备工作',
        collapsed: true,
        items: [
          { text: '介绍', link: '/content/2#2.1' },
          { text: '内容警告&建立游玩边界线', link: '/content/2#2.2' },
          { text: '如何使用本指南', link: '/content/2#2.3' },
        ]
      },
      { text: '法则',
        collapsed: true,
        items: [
          { text: '世界法则', link: '/content/3#3.1' },
          { text: '魔法法则', link: '/content/3#3.2' },
          { text: '暗烛法则', link: '/content/3#3.3' },
        ]
      },
      { text: '机制',
        collapsed: true,
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
      { text: '伤疤&"勋章"', link: '/content/5' },
      { text: '暗烛世界观',
        collapsed: true,
        items: [
          { text: '费尔兰', link: '/content/6#6.1' },
          { text: '最后的大型战争', link: '/content/6#6.2' },
          { text: '哈尔的语言', link: '/content/6#6.3' },
          { text: '新费尔城', link: '/content/6#6.4' },
          { text: '三权分立', link: '/content/6#6.5' },
          { text: '旧费尔', link: '/content/6#6.6' },
          { text: '灯塔', link: '/content/6#6.7' },
          { text: '大裂谷', link: '/content/6#6.8' },
          { text: '远乡', link: '/content/6#6.9' },
          { text: '异乡', link: '/content/6#6.10' },
          { text: '新费尔的地区', link: '/content/6#6.11' },
          { text: '费尔兰的地标', link: '/content/6#6.12' },
        ]
      },
      { text: '词译',
        collapsed: true,
        items: [
          { text: '职业', link: '/names/n1' },
          { text: '属性', link: '/names/n2' },
          { text: '名词', link: '/names/n3' },
        ]
      },
    ]
  },
});
