import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
    lang: 'zh-CN',
    title: 'go-cqhttp 帮助中心',
    description: 'Onebot 的 golang 实现，轻量、原生跨平台',
    base: '/',
    plugins: [
        ['@vuepress/back-to-top'],
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: true
            }
        ],
        [
            '@vuepress/plugin-pwa-popup',
            {
                locales: {
                    '/': {
                        message: '发现新内容可用',
                        button: '刷新',
                    }
                }
            }
        ],
        [
            '@vuepress/plugin-google-analytics',
            {
                id: 'G-CZJ8X185MG'
            }
        ],
        [
            "@vuepress/plugin-docsearch",
            {
                apiKey: '4cfe0f33be16c346fed77effff922cf8',
                indexName: 'go-cqhttp',
                algoliaOptions: {
                    facetFilters: ["lang:en-US"],
                },
            }
        ]
    ],

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        repo: 'Mrs4s/go-cqhttp',
        docsRepo: 'ishkong/go-cqhttp-docs',
        docsBranch: 'main',
        editLinkText: "编辑此页",
        lastUpdated: true,
        lastUpdatedText: '上一次编辑',
        contributors: true,
        tip: "提示",
        warning: "注意",
        danger: "警告",
        backToHome: "返回首页",
        navbar: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'API', children: ['/api/', '/api/guild.md'] },
            { text: 'Event', children: ['/event/', '/event/guild.md'] },
            { text: 'CQ code', link: '/cqcode/' },
            { text: 'Guild', link: '/guild/'},
            { text: 'Advanced', link: '/advanced/'},
            { text: 'FAQ', link: '/faq/' }
        ],
        sidebar: "auto",
    },

})