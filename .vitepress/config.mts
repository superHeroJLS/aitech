import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AITech",
  description: "AI 技术知识库",
  lang: 'zh-CN',
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            displayDetails: '显示详细列表',
            resetButtonTitle: '清除查询条件',
            backButtonTitle: '返回',
            noResultsText: '未找到相关结果',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '确认',
              navigateText: '切换',
              navigateUpKeyAriaLabel: '上一条',
              navigateDownKeyAriaLabel: '下一条',
              closeText: '关闭',
              closeKeyAriaLabel: '关闭'
            }
          }
        },
        miniSearch: {
          options: {
            tokenize: (text: string) => {
              const tokens: string[] = []
              const cjk = text.match(/[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff]+/g)
              if (cjk) {
                for (const segment of cjk) {
                  for (let i = 0; i < segment.length; i++) {
                    tokens.push(segment[i])
                  }
                  for (let i = 0; i < segment.length - 1; i++) {
                    tokens.push(segment.slice(i, i + 2))
                  }
                }
              }
              const words = text.toLowerCase().match(/[a-z0-9]+/g)
              if (words) tokens.push(...words)
              return tokens
            }
          }
        }
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '大语言模型', link: '/docs/llm' }
    ],

    sidebar: [
      {
        text: 'AI 技术',
        items: [
          { text: '大语言模型 LLM', link: '/docs/llm' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
