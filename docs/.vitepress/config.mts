import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "溃烂幻界企划",
  description: "设定和文档站点",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '企划介绍', link: '/introduce' },
      { text: '项目导航', link: '/project/navigator' },
      { text: '设定集', link: '/setting/introduce' },
      { text: '正传', link: '/story/introduce' },
      { text: '世界树迷宫', link: '/yggdrasil_maze/introduce' }
    ],

    sidebar: [
      {
        text: '站点导航',
        items: [
          { text: '主页', link: '/' },
          { text: '企划介绍', link: '/introduce' },
          { text: '项目导航', link: '/project/navigator' },
          { text: '设定集', link: '/setting/introduce' },
          { text: '正传', link: '/story/introduce' },
          { text: '世界树迷宫', link: '/yggdrasil_maze/introduce' }
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3],
      label: '页面目录'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    lastUpdated: {
      text: '最后更新于'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/XuanYu1725/Festering-Paradise-Project' }
    ]
  }
})
