## 搭建博客

### 1. 初始化项目

全局安装VuePress

```bash
yarn global add vuepress # 或者：npm install -g vuepress
```

创建目录

```bash
mkdir project
cd project
```

初始化项目

```bash
yarn init -y # 或者 npm init -y
```

新建docs文件夹

docs文件夹作为项目文档根目录，主要放置Markdown类型的文章和.vuepress文件夹。
```bash
mkdir docs
```

### 2. package.json 基本配置
```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
  /* docs:dev 键值可以自定义修改，此处是为了和一些项目中默认脚本中自带的 dev 区分开。
      如果修改了这个doc:dev 为 mydev，那么下面执行vuepress dev docs的命令就变成了npm run mydev
      npm run mydev 等于在该项目的根目录下执行vuepress dev doc
      vuepress dev doc 做的就是调用安装的vuepress去根据你目录中的.vuepress配置项和docs下的所有.md/。html文件做一个项目的编译和打包
      docs:build 同理 */
}
```
运行

```bash
yarn docs:dev # 或者：npm run docs:dev
```

要生成静态的 HTML 文件，运行：

```bash
yarn docs:build # 或者：npm run docs:build
```
默认情况下，文件将会被生成在 `.vuepress/dist` ，当然，你也可以通过 `.vuepress/config.js`  中的 dest 字段来修改，生成的文件可以部署到任意的静态文件服务器上.


### 3. 基本目录结构
目录结构
```bash
Dev
├─── docs
│   └── .vuepress   // 配置目录
│   │    ├── public // 静态资源
│   │    ├──── img
│   │    ├────── geass-bg.ico // 图标
│   │    ├────── logo.jpg // 首页logo
│   │    └── config.js // 配置文件 
│   ├── FAQ // 求索模块
│   │    ├── Console    // 一级目录 输出层
│   │    ├── DigestionHeap // 一级目录 消化堆
│   │    │      ├── Digested.md    // 二级目录 消化过
│   │    ├── Pool // 静态池
│   │    │      ├── SkillStack.md    // 技术栈
│   │    └── README.md  // 求索首页
│   └── README.md   // 博客首页
└── package.json
```

不管使用哪种方式，最终的项目结构应该和上面一样

- docs文件夹是你的根目录，也是vuepress要去解析的文件夹，
- docs下的README.md可以理解为首页页面。
- docs下的.vuepress是一些配置文件，这里可以存放图片等静态资源，一些主题配置，自定义组件等等

```javascript
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
    base: '/Wiki1001Pro/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: true // 代码块显示行号
    }
 }
```

config.js中继续配置主题参数 顶部导航栏
```javascript
module.exports = {
    // ...
    themeConfig: {
        sidebarDepth: 4, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated' ,// 文档更新时间：每个文件git最后提交的时间,
        // 顶部导航栏
        nav:[
             // 单项 text：显示文字，link：指向链接
             // 这里的'/' 指的是 docs文件夹路径
             // [以 '/' 结尾的默认指向该路径下README.md文件]
            { text: '求索', link: '/FAQ/' },  // http://localhost:8080/Wiki1001Pro/FAQ/
            { text: '仓库', link: '/Store/' },
            { text: '随笔', link: '/Thought/' },
        ]
    }
}

```

config.js中继续配置主题参数 侧边栏
```javascript
module.exports = {
   // ...
   themeConfig: {
        // ...
        // 侧边栏菜单( 一个模块对应一个菜单形式 )
        sidebar:{
             // 打开FAQ主页链接时生成下面这个菜单
            '/FAQ/':[
                //多级菜单形式
                {
                    // 菜单名
                    title: '消化堆',
                    // 子菜单
                    children: [
                        // ['','']=>[路径,标题]
                        // 或者写成 '路径',标题自动识别为该地址的文件中的h1标题
                        // 不以 '/' 结尾的就是指向.md文件             
                        ['/FAQ/DigestionHeap/Digested','消化过'], // '/FAQ/DigestionHeap/Digested.md'文件
                        ['/FAQ/DigestionHeap/Digesting','消化中'],
                        ['/FAQ/DigestionHeap/DigestWill','待消化']
                    ]
                },
                {
                    title: '输出层',
                    children: [
                        ['/FAQ/Console/A001','#A001_VuePress'],
                        ['/FAQ/Console/A002','#A002_插件清单']
                    ]
                },
                ['/FAQ/','百科首页']
            ]
        }
    }
}

```
### 4. 设置博客首页

```bash

---
home: true
heroImage: /img/logo.jpg
heroText: Wiki 1001
tagline: Meet 1000 Books & Unit Them Into 1 Wiki
actionText: Get Wiki →
actionLink: /FAQ/
features:
- title: Wiki - 求索
  details: 基于书签对知识点进行 整理，吸收，吐纳，归档。吾将上下而求索...
- title: Store - 仓库
  details: 展望云仓库而归纳整理，方便行事&培养习惯。鱼和熊掌我全都要...
- title: Thought - 随笔
  details: 活着，是一件最能带来满足感的事。细细琢磨吧，人生啊，有意思的很...
footer: MIT Licensed | Copyright © 2019.01.11-present Mulander-J
---

```

页面对应内容

![](/img/vuepress-2.jpg)

### 5. 部署在Github
首先分别创建两个仓库

#### 仓库一作为展示 （不用克隆到本地）

![创建展示仓库](/img/vuepress-1.jpg)

#### 仓库二作为存储 （克隆到本地）

这个项目是用来开发博客的，以后只需要改这个项目就够了。


在project根目录下创建deploy.sh
```bash
touch deploy.sh
```
编写脚本

```bash
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.yourwebsite.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://USERNAME.github.io
git push -f git@github.com:Haymitch1992/Haymitch1992.github.io.git master

cd -
```

设置package.json

```json
{
    "scripts": {
        "deploy": "bash deploy.sh"
      }
}
```

运行 `npm run depoy.sh` 脚本，将dist目录下的静态页面同步至Github仓库一

通过 `https://haymitch1992.github.io/` 访问 个人博客创建完成！

### 6. 发布到自己的个人域名下
