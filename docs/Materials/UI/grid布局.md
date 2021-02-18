# Grid 布局

## grid 布局与 flex 的区别

- flex 是一维布局，只能在一条直线上放置内容区块。
- grid 是二维布局，根据设计需求将内容区块放置到任何地方。

实际上

两者可以很好的配合使用。

## 浏览器兼容性

兼容主流浏览器 IE 11 以上

## 学习目标

加深对盒子模型的了解

有效提高开发效率，对复杂网页结构更加灵活的布局

## 专业术语

- Grid Container 网格容器 display:grid 它是所有网格想的父元素
- Grid Item 网格项 网格容器的子元素会遵循网格布局规则
- Grid line 网格线 组成网各项的分界线（虚拟概念）
- Grid Track 网格轨道 两个相邻的网格线之间为网格轨道
- Grid Cell 网格单元（虚拟概念）
- Grid Area 网格区域 四个网格线包围的总空间（最重要）
- fr 单位 1fr 2fr 剩下的空间按照数字的比例分配
- gr 网格数（暂不使用）

```html
<style>
  .container {
    display: grid|inline-grid|subgrid;
  }
</style>
<div class="container">
  <div class="item"></div>
</div>
```

## 网格容器的属性

- display
- grid-template
- gap
- items
- content
- grid-auto
- grid

## grid-template

- grid-template-columns 定义网格的列
- grid-template-rows 定义网格的行

### 属性值

- 可以使用css长度
- 网格线的名字