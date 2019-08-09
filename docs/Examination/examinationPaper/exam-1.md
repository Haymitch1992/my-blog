## 笔试题

### 1.正则

```javascript
// 以下哪个能 str 能和 result 匹配
result = str.replace(/^\s+|\s+$/, '') // 去除首尾空格
// str = ' a b c ', result = 'a b c'
// str = ' a b c ', result = 'abc'
// str = ' a b c ', result = 'a b c '
// str = ' a b c ', result = ' a b c'
```

### 2.dom 的操作，常用的有哪些，如何创建、添加、移除、移动、复制、查找节点？

- 创建 `createElement()`
- 添加 `appendChild()`
- 移除 `removeChild()`
- 移动 `replaceChild()`
- 复制 `cloneNode()`
- 查找节点 `getElementById()` `querySelector(#id)` `querySelectorAll(.class)`

### 3.闭包

```javascript
function foo () {
    var i = 0;
    return function () {
        console.log(i++)
    }
}
var f1 = foo()
var f2 = foo()
f1() // 0
f1() // 1
f2()  // 0

```


### 4.正则表达式 ^d+[^d]+ 能匹配下列哪个字符串？
- a.123
- b.123a
- c.d123
- d.123def
- e.d7d

    - ^d+是以d字母开头并且一个或者多个d
    - [^d]+是非d字母一个或者多个


### 5.以下哪些是HTTP请求中浏览器缓存机制会用到的协议头？
- Last-Modified 标示这个响应资源的最后修改时间
- Etag web服务器响应请求时，告诉浏览器当前资源在服务器的唯一标识
- Referer 告诉服务器我来自于哪里
- Authorization  认证，http协议是无状态的， 浏览器和web服务器之间可以通过cookie来身份识别, 桌面应用程序一般不会使用cookie, 而是把 "用户名+冒号+密码"用BASE64编码的字符串放在http request 中的header Authorization中发送给服务端，来进行身份认证

### 6.关于HTTP协议头描述不正确的是()

- cookie是通过http请求正文传到服务器端
- cookie是保存在客户端的
- 服务器端可以读取客户端的所有cookie
- cookie是通过http请求报头传到服务器端

### 以下方案中，是不用于解决回调陷阱的是？
- Promise
- Generator
- async
- proxy

### 写出符合以下规则的Vue的路由
```javascript
noticesIndex: /notices
noticesIndex: /notices/platform/{任意字母}、/type/{任意数字}
noticesDetails: /notices/{任意32位字符数字组合}
[{
    path:'/notices/platform/:str([A-Za-z]+)/type/:num(\\d+)',
    name:'noticseIndex',
    component:NoticesIndex
},{
    path:'/notices/:str(^[a-zA-Z0-9]{32}$)',
    name:'noticesDetails',
    component:NoticesIndex
}]


```

### 口述一次完整的HTTP事务过程

- 1.对www.baidu.com这个网址进行DNS域名解析，得到对应的IP地址

- 2.根据这个IP，找到对应的服务器，发起TCP的三次握手

- 3.建立TCP连接后发起HTTP请求

- 4.服务器响应HTTP请求，浏览器得到html代码

- 5.浏览器解析html代码，并请求html代码中的资源（如js、css图片等）（先得到html代码，才能去找这些资源）

- 6.浏览器对页面进行渲染呈现给用户


### 口述使用Vue时，页面的加载动画适合在哪个声明周期/钩子函数触发

我们现有的项目 是将动画定义在 index.html的容器中 中当Vue加载完会将该容器内容覆盖。
