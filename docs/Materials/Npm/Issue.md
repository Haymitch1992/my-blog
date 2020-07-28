## Npm

| 更新时间     |  操作类别    | 操作人   |
| ---------- | ------|--------|
| 2020-07-28 | 初始化项目 | 王志伟 |



作为一个前端，每个人应该对npm install这个命令应该非常熟悉了，尤其是对这个命令执行过程中命令窗口疯狂输出肯定印象深刻。我发现有的同学对安装包轻车熟路，但对包从哪里来的以及如何发布一个npm并不是很了解，因此做了如下总结，希望能对大家有所帮助。

由于发布包涉及到发布、安装、更新、删除/废弃等阶段，首先介绍一下npm相关的一些知识。



## 1.npm（node package manager）介绍

- 是一个辅助前端开发的包管理工具
- 包括
    - 网站：找包、注册用户
    - 命令行：程序员与npm交互的主要形式
    - 仓库：最大的JavaScript软件库
- 管理对象：包（package）
- 管理方式：
    - 增（发布：npm publish；安装：npm i）
    - 删（废弃：npm deprecate；卸载：npm rm）
    - 改（更新：npm up）
    - 查（搜索：npm s）
    
npm中涉及到的主体主要有两个：package和module，定义如下：

- package：含有package.json描述文件并发布到npm仓库的文件或者文件夹
- module：在node_modules中，可以被Node.js的require()方法加载的任何文件或文件夹

可以这样理解：一个JavaScript软件，从本地发布到npm仓库时是package，从npm仓库下载到本地时就变成了module

另外，基于以上，可以看出package和module的关系：

- module不一定是package（比如node内置模块），package一定是module
- 含package.json文件的module一定是package

除了以上概念外，再分别看下两个主体中的细节部分：


### package（包）
主要有两个重要的属性：
1.Scope（作用域，范围）

一旦注册个人或者团体账户，就获得了与个人或者团体名相匹配的scope，可以用这个scope作为包的命名空间，例如@yuyy、@58。

分类：

- unscoped：例如babel
- scoped
     - user： 例如@yuyy/babel
     - org：@babel/parser

作用：为你自己发布的包提供命名空间，防止与他人的包名冲突
2.Accessibility（可访问性）

属性值有：

- private：私有，仅作者本人或团队成员可见
- public：公有，所有人可见

此属性和github创建仓库时设定访问性的策略一致：公有，所有人可见，免费；私有，仅自己可见，收费。

需要说明的几点：

- 个人账户（User）可以创建和管理Unscoped的package；团队账户（Org）相互只能管理Scoped的package
- Unscoped总是public
- Private的package总是Scoped
- Scoped的package默认Private，但需要付费，可以通过命令行改变其属性

## module（模块）

下载到本地的module主要是用于在node环境被引用，为了能被Node.js的require()方法加载，module必须是下列情况之一：

- 包含package.json，且package.json中有main字段的文件夹
- 含有index.js的文件夹
- JavaScript文件

## 2.发布Npm   

### 进入要发布的项目根目录，初始化为npm包：

```bash
npm init
```

![npm init](/img/npm-init.png)

依次按提示填入包名、版本、描述、github地址、关键字、license等

### 注册Npm账号

```bash
npm adduser
```

![npm init](/img/npm-addUser.png)

### 登陆Npm

```bash
npm login
```

![npm登陆](/img/npm-login.png)

### 发布包，上传到npm包服务器

```bash
npm publish
```

更新包的同时记得要修改 `package.json` 文件中的 `version` 

### 全局安装 nrm

```bash
npm i nrm -g
```

nrm是npm仓库管理工具，可用于npm仓库的快速切换
常用指令

```bash
nrm // 展示nrm可用命令
nrm ls // 列出已配置的所有仓库
nrm test // 测试所有仓库的相应时间
nrm add <registry> <url> //新增仓库
nrm use <registry> //切换仓库
```


## 3.安装和加载原理 

```bash
npm install npm可以搜到的包的名称
```

### 使用

通过 import引入module中的插件 ，在项目进行中 （简化） 

## 4.迭代

一个npm包发布之后，我们难免会修改一些bug，或者增改一些功能，这就涉及到对npm包的迭代。本篇文章就npm迭代涉及到一些知识点进行介绍。

npm包的每次迭代都要涉及到两个方面：

- 内容的变更
- 版本的变更

![版本更新规范](/img/npm-rule.png)

```bash
npm view zhiwei-model versions // 查看历史版本
```

![版本查看](/img/npm-versions.png)

##  5.废弃/废弃
### 废弃
npm包发布后可以对包进行废弃或删除操作，废弃和删除的区别在于：

- 废弃不会将包或版本从npm仓库删除，仍然可以继续下载安装，并在安装的时候会有警示
- 删除会将包从npm彻底删除，无法被下载安装

无论是废弃还是删除，都包含两个层面：

- 版本的废弃/删除
- 包的废弃/删除

```bash
npm deprecate <pkg>[@<version>] <message>

```


### 删除

npm不鼓励任何形式的删除，主要因为我们发布的包可能已经被其他人引用，如果我们删除了此包，其他人在重新安装含有我们包的依赖的工程时，出现找不到包问题。

基于此，npm做了相关的删除限制：

- 删除的版本24小时后方可重发!
- 只有发布72小时之内的包可以删除!

```bash
npm unpublish <pkg>
```








