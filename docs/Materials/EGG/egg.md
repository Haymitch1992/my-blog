# 学习 Egg.js

## 什么是 Egg.js?

Egg.js 的语法是 JavaScript。也就是说，你不用再学习 Golang 或者 Java 这样的基础语言了。而是只要学习 Egg.js 的框架 API，就可以快速开发全栈。

::: tip
Egg.js 是阿里旗下的开源项目，为是企业级框架和应用而生的 Node.js 框架，Egg 奉行（约定优于配置）的框架，按照一套统一的约定进行应用开发。适合团队开发，学习成本小，减少维护成本。
:::

## 安装 Egg

以管理方式打开 Windows 中的 PowerShell（如果不以管理员方式打开，没办新建目录），选择要创建目录的位置。然后创建目录。

```bash
mkdir egg      // 创建egg目录
cd egg         // 进入egg目录
```

使用 yarn 命令来创建一个 egg 项目，命令如下。

```bash
yarn create egg  --type=simple
```

创建完成后，我们需要安装相关的项目依赖。

```bash
yarn install
```

安装完成后，我们用 yarn dev 开启项目，开启后会告诉我们 访问地址为 http://127.0.0.1:7001。

## Egg.js 与 Koa/Express 对比

Egg.js 相对比 Koa 和 Express 框架的学习成本要高，但更适合企业级开发，有成熟的插件机制、扩展机制，还可以使用多进程管理。所以多付出一点学习成本是很划算的事情。

## Egg 项目结构目录

```bash
- app                        - 项目开发的主目录，工作中的代码几乎都写在这里面
-- controller                -- 控制器目录，所有的控制器都写在这个里面
-- router.js                 -- 项目的路由文件
- config                     - 项目配置目录，比如插件相关的配置
-- config.default.js         -- 系统默认配置文件
-- plugin.js                 -- 插件配置文件
- logs                       -- 项目启动后的日志文件夹
- node_modules               - 项目的运行/开发依赖包，都会放到这个文件夹下面
- test                       - 项目测试/单元测试时使用的目录
- run                        - 项目启动后生成的临时文件，用于保证项目正确运行
- typings                    - TypeScript配置目录，说明项目可以使用TS开发
- .eslintignore              - ESLint配置文件
- .eslintrc                  - ESLint配置文件，语法规则的详细配置文件
- .gitignore                 - git相关配置文件，比如那些文件归于Git管理，那些不需要
- jsconfig.js                - js配置文件，可以对所在目录下的所有JS代码个性化支持
- package.json               - 项目管理文件，包含包管理文件和命令管理文件
- README.MD                  - 项目描述文件
```

## dev 跟 Start 的区别

其中有 start 和 dev，这两个是有区别的，我在上节也简单的一嘴概括了。这里给大家详细的解释一下。

- dev : 开发环境中使用，不用重启服务器，只要刷新。修改内容就会更改。
- start：生产环境中使用，也就是开发完成，正式运营之后。以服务的方式运行。修改后要停止和重启后才会发生改变。

## 尝试创建一个新的页面

对目录和操作命令了解后，我们再试着去创建一个新的 页面。打开`/app/controller/home.js`，可以看到如下的代码。

```js
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'Hello World';
  }
}

module.exports = HomeController;
```

这里需要注意的是 Egg.js 全部使用异步模式 async。我们在第 9 行的位置回车，编写下面的代码。

```js
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'Hello World';
  }
  async wzw54180() {
    const { ctx } = this;
    ctx.body = 'Hello World 456';
  }
}

module.exports = HomeController;
```

打开`/app/router.js`文件，然后再第 9 行的位置，加入下面的代码。

```js
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/jspang', controller.home.wzw54180);
};
```

## Controller 控制器的使用

- 在 `RESTful`接口中，Controller 接受用户的参数，从数据库中查找内容返回给用户或者将用户的请求更新到数据库中。
- 在 HTML 页面请求中，Controller 根据用户访问不同的 URL,渲染不同的模板得到 HTML 返回给用户。
- 在代理服务器中，Controller 将用户的请求转发到其他服务器上，并将其他服务器的处理结果返回给用户。

::: tip
官方给的建议是 Controller 层主要对用户的请求参数进行处理，然后调用对应的 service 方法处理业务，得到业务结果的封装
:::

## 创建一个新的 Controller

```js
'use strict';

const Controller = require('egg').Controller;

class JspangController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '<h1>I am  JSPang</h1>';
  }
}

module.exports = JspangController;
```

```js
router.get('/my', controller.jspang.index);
```
