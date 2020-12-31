# Vscode 常用插件

## REST Client

在VsCode中优雅的调试接口

接口的调试几乎是我每天的工作项，我原来使用过Postman，我甚至还使用过PostWoman来进行接口的调试。但了解我的小伙伴都知道我是一个VSCode的重度使用者，我的理想状态是只要打开VSCode，就可以作任何开发的事情。于是开始寻找对应的接口调试插件。终于我遇到了REST Client，虽有不足，但已足够。

### 安装和使用

到VSCode插件中搜索REST Client,搜索到，点击install进行安装。

1、创建一个.http 文件

2、最简单的方式 就是直接写上请求方式和要请求的地址

``` javascript
    GET https://apiblog.jspang.com/default/getArticleList  
```

当然你也可以再增加一些内容，让你的请求更标准些。比如加入HTTP传输协议版本，还比如你提交的是一个POST数据表达，你可以要求表达的数据是以json的形式提交，你就可以加入下面的代码。

```javascript
GET https://apiblog.jspang.com/default/getArticleList  HTTP/1.1

content-type: application/json

{
    "data":"胖哥是最帅的"
}
```

3、发送请求，测试接口
点击`Send Request`,发送结果就将在右侧显示。

## Better Comments

将注释代码高亮显示

在我们编写代码的时候，JS、HTML、CSS、PHP、Python都有对应的高亮显示，让我们的代码看起来及舒服又提高效率。但一般我们的代码注释只有一种颜色，看起来及单调又无趣。

安装非常简单，现在我们来看看都又什么效果。其实使用就是在注释开头加上特殊的符号。

``` javascript
//! 红色注释
//? 蓝色注释
// 灰色删除线注释
//todo 橘红色注释
//*浅绿色注释
```

当然如果你看不上这些颜色，你也可以自己定义属于自己的颜色。方法如下：

```json
"better-comments.tags": [
  {
    "tag": "!",
    "color": "#FF2D00",
    "strikethrough": false,
    "backgroundColor": "transparent"
  },
  {
    "tag": "?",
    "color": "#3498DB",
    "strikethrough": false,
    "backgroundColor": "transparent"
  },
  {
    "tag": "//",
    "color": "#474747",
    "strikethrough": true,
    "backgroundColor": "transparent"
  },
  {
    "tag": "todo",
    "color": "#FF8C00",
    "strikethrough": false,
    "backgroundColor": "transparent"
  },
  {
    "tag": "*",
    "color": "#98C379",
    "strikethrough": false,
    "backgroundColor": "transparent"
  }
]
```
