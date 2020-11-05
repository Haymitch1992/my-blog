## yarn 

| 更新时间     |  操作类别    | 操作人   |
| ---------- | ------|--------|
| 2020-11-5 | 初始化项目 | 王志伟 |

### 什么是yarn

Yarn是facebook发布的一款取代npm的包管理工具。


### yarn的特点
- 速度超快
  - Yarn 缓存了每个下载过的包，所以再次使用时无需重复下载。 同时利用并行下载以最大化资源利用率，因此安装速度更快。
- 超级安全。
  - 在执行代码之前，Yarn 会通过算法校验每个安装包的完整性。
- 超级可靠。
  - 使用详细、简洁的锁文件格式和明确的安装算法，Yarn 能够保证在不同系统上无差异的工作

### 为什么要用yarn？与Npm 有什么区别？

引用网上一位大哥说的话，非常有道理

如果你从事前端开发有些年头了，那你肯定对npm又爱又恨，爱就不说了，恨嘛，就是NPM经常奇慢和卡顿，这还能忍，经常各种错误就没法忍了，尤其是他人创建的项目，自己在安装依赖的时候，经常各种莫名奇妙的错误导致安装失败；尤其是当项目有些年头，一些依赖包已经有更新的时候，重新安装依赖包发生错误的概率甚至超过50%，这个实在没办法忍受；而yarn，则是完全碾压npm的存在~yarn不但速度甩npm十条街，而且很多npm死活安装不上的时候，yarn基本都是一次完美成功安装；在npm5出来后，很多人说有改善，但现在已经5.5了，经我们团队从github上拉取多个开源项目实际测试，npm安装依赖发生错误的概率仍然居高不下，很多项目尝试各种办法仍然无法成功安装依赖和运行，而同样的项目，用yarn安装，则基本一次完成，一次错误也未发生，都成功安装和运行，所以，结论：请忘记npm，请使用yarn

### yarn 安装

```
    npm install -g yarn // 安装

    yarn --version // 查看版本

    yarn config set registry https://registry.npm.taobao.org -g // 淘宝源安装
    yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass 
```

### yarn 常用指令


```
# 生成 package.json 文件（需要手动选择配置）
yarn init

# 生成 package.json 文件（使用默认配置）
yarn init -y

# 一键安装 package.json 下的依赖包
yarn

# 在项目中安装包名为 xxx 的依赖包（配置在 dependencies 下）,同时 yarn.lock 也会被更新
yarn add xxx

# 在项目中安装包名为 xxx 的依赖包（配置在配置在 devDependencies 下）,同时 yarn.lock 也会被更新
yarn add xxx --dev

# 全局安装包名为 xxx 的依
yarn global add xxx

# 运行 package.json 中 scripts 下的命令
yarn xxx

# 列出 xxx 包的版本信息
yarn outdated xxx

# 验证当前项目 package.json 里的依赖版本和 yarn 的 lock 文件是否匹配
yarn check

# 将当前模块发布到 npmjs.com，需要先登录
yarn publish


```

部分npm 与 yarn 命令对比

```
初始化             yarn init                                           npm init 
安装依赖          yarn install 或者 yarn                      npm install pnpm install
新增依赖          yarn add element-ui                        npm install element-ui --save pnpm i element-ui
删除依赖          yarn remove element-ui                  npm uninstall element-ui --save …
更新依赖          yarn upgrade                                   npm update pnpm update
全局安装或删除   yarn global remove vue-cli          npm uninstall vue-cli -g …
同时下载多个       yarn add axios vue-axios            npm install --save axios vue-axios

```
