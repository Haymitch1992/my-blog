# 拿到 UI 是，前端应该如何思考？

前端开发者一大重要的职责就是将 UI 画稿转化为实际可用的页面，效果图的还原度在相当大的程度上决定了 UI 和 PM 的满意度
一般情况下，拿到设计稿后，懒散点的可能直接看图软件打开，肉眼测距就开搞了，负责点的会打开 PS 或者更正规的 Photoshop，
力图精确到 px。

这两种方法各有利弊，前者的还原度大概率堪忧，后者耗时耗力，能把眼睛看瞎，最后都不一定能过得了设计师的像素眼。

通过几年的工作积累，对于如何实现有了一点认识分享给大家，先说结论：整体上对我要做的项目有个大概的定位，然后具体的细节部分，需要高度还原设计尺寸。

## PC 端

### 常见屏幕尺寸

### PC 端常用框架

## 移动端

### 移动端常用框架

## 响应式和自适应

### 什么是响应式？

![响应式与自适应的区别](/img/responsive.png)

一个网站能够兼容多个终端—而不是为每个终端做一个特定的版本。这个概念是为解决移动互联网浏览而诞生的。

### 什么事自适应？

自适应设计指能使网页自适应显示在不同大小终端设备上新网页设计方式及技术。

### 解决方案

#### 1、媒体查询

如果一套样式不行，那么能否给每一种设备各一套不同的样式来实现自适应的效果？

答案是肯定的

使用@media 媒体查询可以针对不同的媒体类型定义不同的样式，特别是响应式页面，可以针对不同屏幕的大小，编写多套样式，从而达到自适应的效果。举例来说：

```css
@media screen and (max-width: 960px) {
  body {
    background-color: #ff6699;
  }
}

@media screen and (max-width: 768px) {
  body {
    background-color: #00ff66;
  }
}

@media screen and (max-width: 550px) {
  body {
    background-color: #6633ff;
  }
}

@media screen and (max-width: 320px) {
  body {
    background-color: #ffff00;
  }
}
```

媒体查询的缺点也很明显，如果在浏览器大小改变时，需要改变的样式太多，那么多套样式代码会很繁琐。

#### 2、百分比

除了用 px 结合媒体查询实现响应式布局外，我们也可以通过百分比单位 " % " 来实现响应式的效果。

比如当浏览器的宽度或者高度发生变化时，通过百分比单位，通过百分比单位可以使得浏览器中的组件的宽和高随着浏览器的变化而变化，从而实现响应式的效果。

css 中的子元素中的百分比（%）到底是谁的百分比？

2.1 height 和 width 的百分比

子元素的 height 或 width 中使用百分比，是相对于子元素的直接父元素，width 相对于父元素的 width，height 相对于父元素的 height。

2.2 top 和 bottom 、left 和 right

子元素的 top 和 bottom 如果设置百分比，则相对于直接非 static 定位(默认定位)的父元素的==高度==。

同样，子元素的 left 和 right 如果设置百分比，则相对于直接非 static 定位(默认定位的)父元素的==宽度==。

2.3 padding/margin

子元素的 padding 如果设置百分比，不论是垂直方向或者是水平方向，==都相对于直接父亲元素的 width==，而与父元素的 height==无关==。

margin 跟 padding 一样

百分比缺点

计算困难，如果我们要定义一个元素的宽度和高度，按照设计稿，必须换算成百分比单位。

从小节 1 可以看出，各个属性中如果使用百分比，相对父元素的属性并不是唯一的。比如 width 和 height 相对于父元素的 width 和 height，而 margin、padding 不管垂直还是水平方向都相对

比父元素的宽度、border-radius 则是相对于元素自身等等，造成我们使用百分比单位容易使布局问题变得复杂

#### 3、rem

1 rem 单位换算

rem 单位无论嵌套层级如何，都只相对于浏览器的根元素（HTML 元素）的 font-size。默认情况下，html 元素的 font-size 为 16px，所以：

```css
// 1 rem = 16px
```

有个问题就是开发的时候，单位用 rem，而设计师一般都是用 px 来设计，开发者用 rem 来开发，极为不适应，虽然可以 font-size 进行转换。

有个方案，是开发也用 px，用 webpack loader 进行转译

可以通过改变 html font-size 来进行动态自适应

1 rem2px, px2rem

```bash
npm install px2rem-loader

```

```js
module.exports = {
  // ...
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'px2rem-loader',
        // options here
        options: {
          remUni: 75,
          remPrecision: 8
        }
      }]
    }]
  }

```

2.1 用 webpack 的插件

```bash
npm install postcss-loader

```

在 webpack 的 plugin 中:

```js
var px2rem = require('postcss-px2rem');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader',
      },
    ],
  },
  postcss: function() {
    return [px2rem({ remUnit: 75 })];
  },
};
```

我理解大部分需求是不需要做响应式的，但绝大多数要求自适应。比如一个后台管理系统，里面存在大量的表单控件，如果让他在移动端端也能正常显示，这并不太现实，第一移动端并不方便操作，如果要做的话，工作量也比较大。

## 把设计放一边

我通常做的第一件事就是把设计细节放在一边。我想先知道这次设计主要包括哪些部分，然后在关注每个部分的细节。考虑以下 UI：

## 文章页面

## 内容部分
