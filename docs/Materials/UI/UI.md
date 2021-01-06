# 拿到 UI 设计稿，前端应该如何思考？

前端开发者的主要职责就是将 UI 设计稿转化为实际可用的页面，效果图的还原度在相当大的程度上决定了 UI 和 PM 的满意度。

一般情况下，拿到设计稿后，懒散点的可能直接打开，肉眼测距就开搭建了，负责点的会打开 PS，力图精确到 px。

这两种方法各有利弊，前者的还原度大概率堪忧，后者耗时耗力，最后都不一定能过得了设计师的像素眼。

::: tip
应该如何去做先说结论：整体上要对做的项目有个大概的定位，选择合适的 UI 框架，然后将页面按模块进行拆分，最后逐个还原设计和功能，过程中还要考虑屏幕的自适应、组件的复用性、未来的可扩展性。
:::

## 常见屏幕尺寸

- PC 端 1920px\*1080px (14 寸笔记本)
- 移动端 2X 375pt \* 667pt 750px \*1334px (苹果 6)
- 移动端 3X 414pt \* 736pt 1242px \* 2208px (苹果 6p)

## 熟悉常用的框架（像超市）

- pc 端

  - [Element-ui](https://element.eleme.cn/#/zh-CN/component/installation)
  - [Ant design](https://ant.design/)

- 移动端

  - [vant](https://vant-contrib.gitee.io/vant/#/zh-CN/)
  - [mint-ui](http://mint-ui.github.io/#!/zh-cn)

- 可视化数据展示

  - [DataV](http://datav.jiaminghi.com/)
  - [echarts](https://echarts.apache.org/zh/api.html#echarts)

例如日期选择的功能，前端应当很快找到对应组件，然后根据设计稿还原设计，过程中可能存在有些差异，这个时候需要及时沟通。

## 响应式和自适应

### 什么是响应式？

一个网站能够兼容多个终端—而不是为每个终端做一个特定的版本。这个概念是为解决移动互联网浏览而诞生的。

### 什么是自适应？

自适应设计指能使网页自适应显示在不同大小终端设备上新网页设计方式及技术。

![响应式与自适应的区别](/img/responsive.png)

### 为什么要考虑响应式和自适应？

这都是以往的血泪史，前期没有考虑到位，后期在测试不同尺寸屏幕的时候，就会反馈很多样式上的 bug,改起来很麻烦，避免给自己挖坑。

### 如何判断？

- 后台管理系统?

- 企业官网?
  [企业官网](https://www.apple.com.cn/)

- 可视化大屏幕?
  [可视化大屏幕](http://www.youbaobao.xyz/datav-res/template/smart-city-template1/)

- 移动端基金理财 App?

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

2.1 `height` 和 `width` 的百分比

子元素的 height 或 width 中使用百分比，是相对于子元素的直接父元素，width 相对于父元素的 width，height 相对于父元素的 height。

2.2 `top` 和 `bottom` 、`left` 和 `right`

子元素的 top 和 bottom 如果设置百分比，则相对于直接非 static 定位(默认定位)的父元素的==高度==。

同样，子元素的 left 和 right 如果设置百分比，则相对于直接非 static 定位(默认定位的)父元素的==宽度==。

2.3 `padding/margin`

子元素的 padding 如果设置百分比，不论是垂直方向或者是水平方向，==都相对于直接父亲元素的 width==，而与父元素的 height==无关==。

margin 跟 padding 一样

百分比缺点

计算困难，如果我们要定义一个元素的宽度和高度，按照设计稿，必须换算成百分比单位。

从小节 1 可以看出，各个属性中如果使用百分比，相对父元素的属性并不是唯一的。比如 width 和 height 相对于父元素的 width 和 height，而 margin、padding 不管垂直还是水平方向都相对

比父元素的宽度、border-radius 则是相对于元素自身等等，造成我们使用百分比单位容易使布局问题变得复杂

#### 3、rem

1 rem 单位换算

rem 单位无论嵌套层级如何，都只相对于浏览器的根元素（HTML 元素）的 font-size。默认情况下，html 元素的 font-size 为 16px，所以：

```bash
 1 rem = 16px
```

有个问题就是开发的时候，单位用 rem，而设计师一般都是用 px 来设计，开发者用 rem 来开发，极为不适应，虽然可以 font-size 进行转换。

有个方案，是开发也用 px，用 webpack loader 进行转译

可以通过改变 html font-size 来进行动态自适应

用 webpack 的插件

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

## 实例分析

![拿到一份UI设计](/img/ui-page-1.png)

## 把设计细节放在一边

根据 UI 设计图将页面抽象成三个部分：

- Header/Navigation
- 中间内容 部分
- 底部的 How it works 部分

接着，我们先把这三个主要部分抽象出来：

![拿到一份UI设计](/img/ui-page-2.png)

抽象后，我们可以看到主要的部分，可以帮助我们考虑如何布局组件，而不用考虑每个组件的细节。

我是这样想的：

- `Full-width header`：头部的导航栏
- `Centered Content`：中间内容水平居中，注意，这个一般需要设置最大宽度 `max-width`。
- `How it works`：这是一个 4 列的布局，整个部分都被限制在一个包装器中。

接着，把上面三个部分用代码表示出来：

```html
<header></header>

<section class="hero">
  <!-- A div to constraint the content -->
  <div class="hero__content"></div>
</section>

<div class="wrapper">
  <!-- 4-columns layout -->
  <section class="grid-4"></section>
</div>
```

![html与css的关系](/img/htmlOrCss.jpg)

因为我们有一个 4 列的部分，这里我使用 CSS 网格：

```css
.wrapper {
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: 1140px;
}

.hero__content {
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
```

拿到 UI 时，我们不是马上就开始行动，而是要观察整体的构成，先实现每块的构成，然后再去深入构成的实现。

## 文章页面

我们再一次把它抽象成主要的几个部分：

![拿到一份UI设计](/img/ui-page-3.png)

抽象主要包括几个部分：

- 网站的头部宽度是 100%

- 标题：包含文章标题和说明，其内容左对齐，要设置最大宽度

- 两列布局，包含 `main` 和 `sidebar` 元素。

- 文章内容，水平居中并有最大宽度。

### 文章-页面标题

![拿到一份UI设计](/img/ui-page-4.jpg)

这里不需要什么布局方法。一个简单的 `max-width` 就可以了，当然还需要加些 `padding`，增加一些舒适距离。

```css
.page-header {
  max-width: 50rem;
  padding: 2rem 1rem;
}
```

### 文章- Main 和 Sidebar

![拿到一份UI设计](/img/ui-page-5.png)

```css
.page-wrapper {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 800px) {
  grid-template-columns: 1fr 250px;
}
```

对于文章的内部内容，应该将其限制在一个包装器中。

```css
.inner-content {
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}
```

有些整体的布局后，我们来看具体的细节。

## 深入细节

### How It Works 部分

在本文的第一个示例中，我们来看一下 `How It Works 部分` 的细节实现。

![拿到一份UI设计](/img/ui-page-6.png)

### 列

- 这里的步骤一，二，三，有没有可能会增加或者减少的情况，如果有，我们应该如何处理？

- 我们是否需要列的高度相等，特别是当一个卡片有一个很长的文本？

### 标题

我们是否需要该部分标题留在一边？ 还是在某些情况下应采用全宽？

### 响应式设计

当网页宽度缩小时，我们需要做响应式吗？ 如果有, 那触发的条件是什么？

这些是我们开发可能会遇到的问题，你觉得怎么样?作为一名前端开发人员，我们应该考虑这样的边缘情况，而不仅仅按 UI 照猫画虎这样简单。

![拿到一份UI设计](/img/ui-page-7.png)

由于本文着重于思考过程，所以无法详细介绍一个个有可能出现的情况。

在上面的模型的第一个和第三个版本中，步骤数分别是 3 和 2。我们可以使 CSS 动态化来处理吗？ 可以。

```html
<div class="wrapper">
  <section class="steps">
    <div>
      <h2>How it works</h2>
      <p>Easy and simple steps</p>
    </div>
    <div class="layout">
      <div class="layout__item">
        <article class="card"></article>
      </div>
      <div class="layout__item">
        <article class="card"></article>
      </div>
      <div class="layout__item">
        <article class="card"></article>
      </div>
    </div>
  </section>
</div>
```

```css
.steps {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
}

@media (min-width: 700px) {
  .steps {
    grid-template-columns: 250px 1fr;
  }
}

.layout {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
}

@media (min-width: 200px) {
  .layout {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}
```

我使用了 CSS grid minmax()和 auto-fit 关键字。 这在卡片数量可以增加或减少的情况下很有用。

![拿到一份UI设计](/img/ui-work.gif)

## 内容部分

![拿到一份UI设计](/img/ui-page-8.png)

### 图片

- 图片应如何呈现？ 它是每天变化的还是应该从 CMS 更新？

- 是使用 `HTML <img>`还是 `CSS background`？

- 图片的预期长宽比是多少？

- 我们是否需要根据视口大小使用多个图像大小？

- 图片的部分是否可能会换成视频？

### 高度

内容最小高度是多少？

### 内容长度

我们需要设置标题和描述的最大长度吗?如果是，设计期望处理的最小值和最大值是多少？

### 元素之间的间距

如何处理垂直间距？

### 内容中心

如何水平和垂直居中内容?已知我们只知道宽度，而高度是未知的。

### 限制内容

为了提高可读性，最好限制内容。 理想的宽度是多少？
