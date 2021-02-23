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
- grid-template-areas 定义网格区域
- grid-template 是 grid-template-columns grid-template-rows grid-template-aresas 的简写(暂时不建议写)
- gap 网格线的宽度 grid-column-gap grid-row-gap 等长度控制列与列之间（行与行之间）的间隙
- items justify-items 沿着行轴兑现网格内的内容 `start` `end` `center` `stretch` 内容宽度占据整个网格区域空间（这是默认值）
- alin-items 沿着竖轴兑现网格内的内容 `start` `end` `center` `stretch` 内容宽度占据整个网格区域空间（这是默认值）
- place-item 是justify-items alin-items 简写

```css
.container {
  display: grid;
  grid-template-columns: [aa-start] 100px [aa-end bb-start] atuo 1fr 1fr;
  grid-template-areas:
    'aa bb bb cc'
    'dd bb bb ee'
    'ff gg gg gg';
  grid-template-rows: 1fr 1fr 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 55px;
  
  /* grid-gap: <grid-row-gap> <grid-column-gap>; */
  /* gap: 55px 50px; 符合w3c的最新简写*/

  /* justify-items: end;
  align-items:center; */
  place-items: center end;
}
.aa {
  grid-area: aa;
}
.bb {
  grid-area: bb;
}
.cc {
  grid-area: cc;
}
.dd {
  grid-area: dd;
}
.ee {
  grid-area: ee;
}
.gg {
  grid-area: gg;
}
```

### 属性值

- 可以使用 css 长度
- 网格线的名字
