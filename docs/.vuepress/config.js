module.exports = {
    title: 'go-cqhttp 帮助中心',
    description: 'go-cqhttp帮助中心',
    base: '/go-cqhttp-docs/',
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
        },
    },
    themeConfig: {
        search: true,
        searchMaxSuggestions: 5,
        smoothScroll: true,
        lastUpdated: '上一次编辑',
        docsDir: 'docs',
        docsBranch: 'master',
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
            { text: 'Faq', link: '/faq/' }
        ],
        sidebar: {
            '/guide/': [
                '',
                'quick_start',
                'file',
                'config',
                'achieve',
                'eventfilter',
                'adminApi'
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
            ]
        }
    }
}
