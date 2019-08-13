## 管家帮面试

### git push 和 git fetch 的区别？
- git fetch :相当于从远程获取最新版本到本地，不会自动merge
- git push : 获取最新版本 并merge 到本地

### vue 项目中引用 微信的sdk 会有那些问题
- 如果项目中用的 hash 模式 url 中含有 "#"
- 需要去掉 url #后面的的字符 location.href.split('#')[0]

### import 和 require 的区别
- 调用时间
    - require是运行时调用，所以require理论上可以运用在代码的任何地方 
    - import是编译时调用，所以必须放在文件开头 
- 本质
    - require是赋值过程，其实require的结果就是对象、数字、字符串、函数等，再把require的结果赋值给某个变量
    - import是解构过程，但是目前所有的引擎都还没有实现import，我们在node中使用babel支持ES6，也仅仅是将ES6转码为ES5再执行，import语法会被转码为require

### vue.use和vue.prototype的区别
- 不是为了vue写的插件(插件内要处理)不支持Vue.use()加载方式
- 非vue官方库不支持new Vue()方式
- 每一个vue组件都是Vue的实例，所以组件内this可以拿到Vue.prototype上添加的属性和方法。

### prototype和proto区别

### 深克隆和浅克隆的区别
