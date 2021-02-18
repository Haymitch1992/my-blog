module.exports = {
    title: '王志伟的博客', // 页签标题 : A001_VuePress博客搭建的简单教程&问题分析 # | Wiki 1001
    description: '学习、生活、工作、总结', // meta 中的描述文字，意义不大，SEO用
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        // 增加一个自定义的 favicon(网页标签的图标)
        // 这里的 '/' 指向 docs/.vuepress/public 文件目录
        // 即 docs/.vuepress/public/img/geass-bg.ico
        ['link', { rel: 'icon', href: '/img/geass-bg.ico' }],
    ],
    base: '/Haymitch1992.github.io/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        sidebarDepth: 4, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated' ,// 文档更新时间：每个文件git最后提交的时间,
        // 顶部导航栏
        nav:[
            // 单项 text：显示文字，link：指向链接
            // 这里的'/' 指的是 docs文件夹路径
            // [以 '/' 结尾的默认指向该路径下README.md文件]
            { text: '技术总结', link: '/Materials/'},
            { text: '仓库', link: '/Store/' },
            { text: '随笔', link: '/Thought/' },
            { text: '面试', link: '/Examination/' },
            // 多项，下拉形式
            {
                text: 'Concat',
                items: [
                    // link：指向链接也可以是外网链接
                    { text: '数据中台', link: 'http://112.126.65.241:4000/login' },
                    { text: '算法中台', link: 'http://47.95.214.123:8000/#/' },
                ]
            },
            {
                text: 'GitHub',
                items: [
                    { text: 'GitHub首页', link: 'https://github.com/Haymitch1992' },
                ]
            },
        ],
        // 侧边栏菜单( 一个模块对应一个菜单形式 )
        sidebar:{
            // 打开Thought主页链接时生成下面这个菜单
            '/Thought/':[
                ['/Thought/','随笔首页'],
                {
                    title: '生活备忘',
                    children: [
                        ['/Thought/Travels/beiPing','车险费用'],
                        ['/Thought/Travels/tip','小窍门'],
                        ['/Thought/Travels/lixiang','理想One驾驶体验']
                    ]
                },
                {
                    title: '旅游出行',
                    children: [
                        ['/Thought/Travels/tianlu','草原天路'],
                    ]
                },
                {
                    title: '年终回顾',
                    children: [
                        ['/Thought/YearReview/2018','2018年'],
                        ['/Thought/YearReview/2019','2019年'],
                        ['/Thought/YearReview/2020','2020年'],
                        ['/Thought/YearReview/2021','2021年']
                    ]
                },
            ],
            // 打开Store主页链接时生成下面这个菜单
            '/Store/': [
                ['','前端面试题'],
                {
                    title: '应用',
                    children: [
                        ['/Store/Apps/DownDoors', '下载门户'],
                        ['/Store/Apps/OwnTest', '博主测评']
                    ]
                },
                {
                    title: '电影',
                    children: [
                        ['/Store/Films/','收藏级电影']
                    ]
                },
                {
                    title: '亮狮网',
                    children: [
                        ['/Store/Anime/liangshiPage1','亮狮网企业文化'],
                        ['/Store/Anime/liangshiPage2','亮狮网入职培训'],
                        ['/Store/Anime/liangshiwork','亮狮网工作记录'],
                        ['/Store/Anime/exchange','vue培训'],
                        ['/Store/Anime/liangshiworklist','亮狮网工作备忘']
                    ]
                },{
                    title: '交控科技',
                    children: [
                        ['/Store/tct/企业文化培训.md','企业文化培训'],
                    ]
                }
            ],
            // 打开Store主页链接时生成下面这个菜单
            '/Examination/': [
                {
                    // 菜单名
                    title: '面试技巧',
                    // 子菜单
                    children: [
                        // ['','']=>[路径,标题]
                        // 或者写成 '路径',标题自动识别为该地址的文件中的h1标题
                        // 不以 '/' 结尾的就是指向.md文件
                        ['/Examination/interviewExperience/00-准备','准备'],
                        ['/Examination/interviewExperience/01-页面布局','页面布局'],

                    ]
                },
                {
                    // 菜单名
                    title: '面试反馈及结果',
                    // 子菜单
                    children: [
                        // ['','']=>[路径,标题]
                        // 或者写成 '路径',标题自动识别为该地址的文件中的h1标题
                        // 不以 '/' 结尾的就是指向.md文件
                        ['/Examination/examinationPaper/exam-zhongkeruan','中科软面试总结'], // '/FAQ/DigestionHeap/Digested.md'文件
                        ['/Examination/examinationPaper/exam-xianzaizhifu','现在支付面试总结'],
                        ['/Examination/examinationPaper/exam-youjiameisu','有家美宿面试总结'],
                        ['/Examination/examinationPaper/exam-guanjiabang','管家帮面试总结'],
                        ['/Examination/examinationPaper/exam-1','笔试题'],
                    ]
                },
            ],
            '/Materials/': [
                {
                    title: '培训学习',
                    children: [
                        ['/Materials/UI/UI.md', '拿到UI设计后，前端应该如何思考?'],
                        ['/Materials/UI/Airbnb前端代码规范.md', '前端代码规范']
                    ]
                },
                {
                    title: 'Vuepress',
                    children: [
                        ['/Materials/Vuepress/Vuepress', 'Vuepress搭建'],
                    ]
                }, {
                    title: 'Javascript',
                    children: [
                        ['/Materials/Javascript/Array', '数组的常见操作'],
                    ]
                },{
                    title:'Vue项目实战',
                    children:[
                        ['/Materials/Vue/vue','Vue项目搭建'],
                        ['/Materials/Vue/vueFor','v-for中key的作用'],
                        ['/Materials/Vue/vueModel','vue-model的原理'],
                        ['/Materials/Vue/vueAwesomeSwiper','项目中使用vue-awesome-swiper'],
                        ['/Materials/Vue/vue3', 'vue3新特性'],
                        ['/Materials/Vue/vueScoped','Vue中的scoped及穿透方法']
                    ]
                }, {
                    title: 'Vue+TypeScript',
                    children: [
                        ['/Materials/TypeScript/learnVue', '学习Vue'],
                        ['/Materials/TypeScript/VueAndTypescript', 'Vue+TypeScript初始化项目'],
                        ['/Materials/TypeScript/OriginalDataType', '原始数据类型'],
                        ['/Materials/TypeScript/Any', '任意值'],
                        ['/Materials/TypeScript/TypeInference', '类型推论'],
                        ['/Materials/TypeScript/UnionType', '联合类型'],
                        ['/Materials/TypeScript/generator', 'Generator函数'],
                    ]
                }, {
                    title: 'Github使用技巧',
                    children: [
                        ['/Materials/Github/Collaborators', '为项目添加协作者'],
                        ['/Materials/Github/GitFetch','git fetch & pull详解']
                    ]
                },{
                    title: '包管理工具',
                    children: [
                        ['/Materials/Npm/Issue','NPM'],
                        ['/Materials/Npm/yarn','YARN']
                    ]
                },{
                    title: '开发工具',
                    children: [
                        ['/Materials/VsCode/VsCode常用插件.md','VsCode常用插件'],
                    ]
                }
            ]
        },
    }
}
