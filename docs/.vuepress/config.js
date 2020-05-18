module.exports = {
    base:'/kakaUI/',
    title: 'Kaka UI',
    description: '一个好用的UI',
    themeConfig: {
        nav:[
            {text:'主页',link:'./'},
            {text:'文档',link:'/guide/'},
            {text:'交流',link:'https://baidu.com'}
        ],
        sidebar: [
            {
                title:'入门',
                children: [
                    '/install/',
                    'get-start/',
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/button',
                    '/components/tab',
                    '/components/popover',
                ]
            }
        ]
    }
}