//引入html侧边栏导航配置
import { frontendHTML } from '../../router/frontend/html'
//引入vue侧边栏导航配置
import { frontendVue } from '../../router/frontend/vue'
//引入Webpack侧边栏导航配置
import { frontendWebpack } from '../../router/frontend/Webpack'
import { pinia } from '../../router/frontend/pinia'
//引入javaSE栏目侧边栏导航配置
import { backendJavaSE } from '../../router/backend/javaSE'
//引入Linux栏目侧边栏导航配置
import { toolSoftwareLinux } from '../../router/toolSoftware/linux'
//引入maven栏目侧边栏导航配置
import { backendMaven } from '../../router/backend/maven'
//引入tui.editor插件侧边栏
import { plugInExtensionTuiEditor } from '../../router/PlugInExtension/tuiEditor'
import { defineConfig } from 'vitepress'
export default defineConfig({
  //配置
  base: '/comxxx/',
  title: '开发文档',
  titleTemplate: '开发文档',
  description: 'Vite & Vue powered static site generator.',
  appearance: true,
  lang: 'zh-CN',
  lastUpdated: true,
  markdown: {
    theme: 'github-dark',
    lineNumbers: true,
  },
  head: [
    // 添加图标
    ['meta', { name: 'keywords', content: '个人博客' }],
    ['link', { rel: 'icon', href: './my-logo.png/' }],
  ],
  // 主题配置
  themeConfig: {
    siteTitle: 'you best！',
    logo: '/logo.svg',
    // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
    lastUpdatedText: '最近更新时间',
    outlineTitle: '在本页面',
    // 启动页面丝滑滚动
    smoothScroll: true,
    // 导航栏配置
    socialLinks: [{ icon: 'github', link: 'https://baidu.com' }],
    nav: [
      { text: '首页', link: '/' },
      {
        text: '模板分组',
        activeMatch: '/frontend/',
        items: [
          {
            items: [
              {
                text: 'HTML',
                link: '/frontend/HTML/',
              },
              {
                text: 'Vue',
                link: '/frontend/Vue/',
              },
            ],
          },
          {
            text: 'Webpack',
            link: '/frontend/Webpack/basic',
          },
          {
            items: [
              {
                text: 'Pinia',
                link: '/frontend/Pinia/',
              },
            ],
          },
        ],
      },
      {
        text: '后端',
        activeMatch: '/backend/',
        items: [
          {
            items: [
              {
                text: 'JavaSE',
                link: '/backend/JavaSE/',
              },
              {
                text: 'Maven',
                link: '/backend/Maven/',
              },
            ],
          },
        ],
      },
      {
        text: '工具软件',
        activeMatch: '/toolSoftware/',
        items: [
          {
            items: [
              {
                text: 'linux',
                link: '/toolSoftware/Linux/',
              },
            ],
          },
        ],
      },
      {
        text: '插件扩展',
        activeMatch: '/PlugInExtension/',
        items: [
          {
            items: [
              {
                text: 'tui.editor',
                link: '/PlugInExtension/tuiEditor/',
              },
            ],
          },
        ],
      },
      { text: '简书', link: 'https://www.jianshu.com/u/94f29127275f' },
    ],
    sidebar: {
      '/frontend/HTML/': frontendHTML(),
      '/frontend/Vue/': frontendVue(),
      '/frontend/Webpack/': frontendWebpack(),
      '/frontend/Pinia/': pinia(),
      '/backend/JavaSE/': backendJavaSE(),
      '/toolSoftware/Linux/': toolSoftwareLinux(),
      '/backend/Maven/': backendMaven(),
      '/PlugInExtension/tuiEditor/': plugInExtensionTuiEditor(),
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present wxf',
    },
    docFooter: {
      prev: ' 上一页 ',
      next: ' 下一页 ',
    },
  },
})
