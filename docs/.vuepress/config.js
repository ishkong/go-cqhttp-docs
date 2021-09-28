module.exports = {
    title: 'go-cqhttp 帮助中心',
    description: 'cqhttp的golang实现，轻量、原生跨平台',
    base: '/',
    plugins: {
        '@vuepress/search': {
            searchMaxSuggestions: 10
        },
        '@vuepress/back-to-top': true,
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
                message: "发现新的内容",
                buttonText: "刷新",
            }
        }
    },
    head: [
        [
            'script',
            {
                async: true,
                src: 'https://www.googletagmanager.com/gtag/js?id=G-CZJ8X185MG',
            }
        ],
        [
            'script',
            {},
            [
                "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-CZJ8X185MG');",
            ],
        ],
    ],
    themeConfig: {
        algolia: {
            apiKey: '4cfe0f33be16c346fed77effff922cf8',
            indexName: 'go-cqhttp',
            algoliaOptions: {
                facetFilters: ["lang:zh-CN"],
            },
        },
        smoothScroll: true,
        lastUpdated: '上一次编辑',
        docsDir: 'docs',
        docsBranch: 'main',
        repo: 'Mrs4s/go-cqhttp',
        repoLabel: 'GitHub',
        docsRepo: 'ishkong/go-cqhttp-docs',
        editLinks: true,
        editLinkText: '编辑此页',
        displayAllHeaders: false,
        sidebarDepth: 2,
        activeHeaderLinks: true,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'API', link: '/api/' },
            { text: 'Event', link: '/event/' },
            { text: 'CQ code', link: '/cqcode/' },
            { text: 'FAQ', link: '/faq/' }
        ],
        sidebar: {
            '/guide/': [
                '',
                'quick_start',
                'file',
                'config',
                'achieve',
                'eventfilter'
            ],
            '/api/': [
                '',
            ],
            '/event/': [
                '',
            ],
            '/cqcode/': [
                '',
            ],
            '/faq/': [
                '',
                'slider'
            ]
        }
    }
}
