module.exports = {
    base:'/kakaUI/',
    title: 'Kaka UI',
    description: '一个好用的UI',
    themeConfig: {
        nav:[
            {text:'主页',link:'./'},
        ],
        sidebar: [
            {
                title: '组件',
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/tab',
                    '/components/popover',
                    '/components/toast',
                    '/components/collapse',
                    '/components/gird',
                    '/components/layout',
                ]
            }
        ]
    }
}