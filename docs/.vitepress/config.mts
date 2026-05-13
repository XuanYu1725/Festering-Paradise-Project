import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "溃烂幻界企划",
  description: "设定和文档站点",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '正传', link: '/story/introduce' },
      { text: '世界树迷宫', link: '/yggdrasil_maze/introduce' }
    ],

    sidebar: [
      {
        text: '溃烂幻界企划',
        items: [
          { text: '导航', link: '/project/navigator' },
          { text: '介绍', link: '/project/introduce' },
          { text: '加入或支持我们', link: '/project/support' },
          { text: '贡献者和感谢名单', link: '/project/contributors' }
        ]
      },
      {
        text: '正传',
        items: [
          { text: '项目简介', link: '/story/introduce' }
        ]
      },
      {
        text: '世界树迷宫',
        items: [
          { text: '项目简介', link: '/yggdrasil_maze/introduce' }
        ]
      },
      {
        text: '设定集',
        items: [
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/XuanYu1725/Festering-Paradise-Project' }
    ]
  }
})
