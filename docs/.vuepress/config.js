module.exports = {
    title: 'Go-cqhttp帮助中心',
    description: 'Go-cqhttp帮助中心',
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
        displayAllHeaders: true,
        activeHeaderLinks: true,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'API', link: '/api/' },
            { text: 'Event', link: '/event/' },
            { text: 'CQcode', link: '/cqcode/' },
        ],
        sidebar: {
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
