## Npm

| 更新时间   | 操作类别   | 操作人 |
| ---------- | ---------- | ------ |
| 2020-07-28 | 初始化项目 | 王志伟 |

作为一个前端，每个人应该对 npm install 这个命令应该非常熟悉了，尤其是对这个命令执行过程中命令窗口疯狂输出肯定印象深刻。我发现有的同学对安装包轻车熟路，但对包从哪里来的以及如何发布一个 npm 并不是很了解，因此做了如下总结，希望能对大家有所帮助。

由于发布包涉及到发布、安装、更新、删除/废弃等阶段，首先介绍一下 npm 相关的一些知识。

## 1.npm（node package manager）介绍

- 是一个辅助前端开发的包管理工具
- 包括
  - 网站：找包、注册用户
  - 命令行：程序员与 npm 交互的主要形式
  - 仓库：最大的 JavaScript 软件库
- 管理对象：包（package）
- 管理方式：
  - 增（发布：npm publish；安装：npm i）
  - 删（废弃：npm deprecate；卸载：npm rm）
  - 改（更新：npm up）
  - 查（搜索：npm s）

npm 中涉及到的主体主要有两个：package 和 module，定义如下：

- package：含有 package.json 描述文件并发布到 npm 仓库的文件或者文件夹
- module：在 node_modules 中，可以被 Node.js 的 require()方法加载的任何文件或文件夹

可以这样理解：一个 JavaScript 软件，从本地发布到 npm 仓库时是 package，从 npm 仓库下载到本地时就变成了 module

另外，基于以上，可以看出 package 和 module 的关系：

- module 不一定是 package（比如 node 内置模块），package 一定是 module
- 含 package.json 文件的 module 一定是 package

除了以上概念外，再分别看下两个主体中的细节部分：

### package（包）

主要有两个重要的属性：
1.Scope（作用域，范围）

一旦注册个人或者团体账户，就获得了与个人或者团体名相匹配的 scope，可以用这个 scope 作为包的命名空间，例如@yuyy、@58。

分类：

- unscoped：例如 babel
- scoped
  - user： 例如@yuyy/babel
  - org：@babel/parser

作用：为你自己发布的包提供命名空间，防止与他人的包名冲突
2.Accessibility（可访问性）

属性值有：

- private：私有，仅作者本人或团队成员可见
- public：公有，所有人可见

此属性和 github 创建仓库时设定访问性的策略一致：公有，所有人可见，免费；私有，仅自己可见，收费。

需要说明的几点：

- 个人账户（User）可以创建和管理 Unscoped 的 package；团队账户（Org）相互只能管理 Scoped 的 package
- Unscoped 总是 public
- Private 的 package 总是 Scoped
- Scoped 的 package 默认 Private，但需要付费，可以通过命令行改变其属性

## module（模块）

下载到本地的 module 主要是用于在 node 环境被引用，为了能被 Node.js 的 require()方法加载，module 必须是下列情况之一：

- 包含 package.json，且 package.json 中有 main 字段的文件夹
- 含有 index.js 的文件夹
- JavaScript 文件

## 2.发布 Npm

### 进入要发布的项目根目录，初始化为 npm 包：

```bash
npm init
```

![npm init](/img/npm-init.png)

依次按提示填入包名、版本、描述、github 地址、关键字、license 等

### 注册 Npm 账号

```bash
npm adduser
```

![npm init](/img/npm-addUser.png)

### 登陆 Npm

```bash
npm login
```

![npm登陆](/img/npm-login.png)

### 发布包，上传到 npm 包服务器

```bash
npm publish
```

更新包的同时记得要修改 `package.json` 文件中的 `version`

### 全局安装 nrm

```bash
npm i nrm -g
```

nrm 是 npm 仓库管理工具，可用于 npm 仓库的快速切换
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

通过 import 引入 module 中的插件 ，在项目进行中 （简化）

## 4.迭代

一个 npm 包发布之后，我们难免会修改一些 bug，或者增改一些功能，这就涉及到对 npm 包的迭代。本篇文章就 npm 迭代涉及到一些知识点进行介绍。

npm 包的每次迭代都要涉及到两个方面：

- 内容的变更
- 版本的变更

![版本更新规范](/img/npm-rule.png)

```bash
npm view zhiwei-model versions // 查看历史版本
```

![版本查看](/img/npm-versions.png)

## 5.废弃/废弃

### 废弃

npm 包发布后可以对包进行废弃或删除操作，废弃和删除的区别在于：

- 废弃不会将包或版本从 npm 仓库删除，仍然可以继续下载安装，并在安装的时候会有警示
- 删除会将包从 npm 彻底删除，无法被下载安装

无论是废弃还是删除，都包含两个层面：

- 版本的废弃/删除
- 包的废弃/删除

```bash
npm deprecate <pkg>[@<version>] <message>

```

### 删除

npm 不鼓励任何形式的删除，主要因为我们发布的包可能已经被其他人引用，如果我们删除了此包，其他人在重新安装含有我们包的依赖的工程时，出现找不到包问题。

基于此，npm 做了相关的删除限制：

- 删除的版本 24 小时后方可重发!
- 只有发布 72 小时之内的包可以删除!

```bash
npm unpublish <pkg>
```
