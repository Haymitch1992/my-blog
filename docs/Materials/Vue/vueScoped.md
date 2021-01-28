# Vue 中的 scoped 及穿透方法

## scoped 的由来

css 一直有个令人困扰的作用域问题：即使是模块化编程下，在对应的模块的 js 中 import css 进来，这个 css 仍然是全局的。为了避免 css 样式之间的污染，vue 中引入了 scoped 这个概念。

在 vue 文件中的 style 标签上，有一个特殊的属性：scoped。当一个 style 标签拥有 scoped 属性时，它的 CSS 样式就只能作用于当前的组件。通过设置该属性，使得组件之间的样式不互相污染。如果一个项目中的所有 style 标签全部加上了 scoped，相当于实现了样式的模块化。

但是这些样式又是如何实现不相互影响呢？

## scoped 的原理

vue 中的 scoped 通过在 DOM 结构以及 css 样式上加唯一不重复的标记:data-v-hash 的方式，以保证唯一（而这个工作是由过 PostCSS 转译实现的），达到样式私有化模块化的目的。
总结一下 scoped 三条渲染规则：

给 HTML 的 DOM 节点加一个不重复 data 属性(形如：data-v-19fca230)来表示他的唯一性

在每句 css 选择器的末尾（编译后的生成的 css 语句）加一个当前组件的 data 属性选择器（如[data-v-19fca230]）来私有化样式

如果组件内部包含有其他组件，只会给其他组件的最外层标签加上当前组件的 data 属性

转译前：

```vue
<style lang="scss" scoped>
.test {
  background: blue;
  span {
    color: red;
  }
}
</style>
<template>
  <div class="test">
    <span>hello world !</span>
  </div>
</template>
```

转译后：

```vue
<style lang="css">
.test[data-v-ff86ae42] {
  background: blue;
}
.test span[data-v-ff86ae42] {
  color: red;
}
</style>
<template>
  <div class="test" data-v-ff86ae42>
    <span data-v-ff86ae42>hello world !</span>
  </div>
</template>
```

可以看出：PostCSS 会给一个组件中的所有 dom 添加了一个独一无二的动态属性 data-v-xxxx，然后，给 CSS 选择器额外添加一个对应的属性选择器来选择该组件中 dom，这种做法使得样式只作用于含有该属性的 dom——组件内部 dom, 从而达到了'样式模块化'的效果.

## 穿透 scoped

但是，在做项目中，会遇到这么一个问题，即：引用了第三方组件，需要在组件中局部修改第三方组件的样式，而又不想去除 scoped 属性造成组件之间的样式污染。那么有哪些解决办法呢？

- 不使用 scoped 省略（个人不推荐）
- 在模板中使用两次 style 标签：

```vue
<style lang="scss">
/*添加要覆盖的样式*/
</style>
<style lang="scss" scoped>
/* local styles */
</style>
<!--vue官网中提到：一个 .vue 文件可以包含多个style标签。所以上面的写法是没有问题的。-->
```

- 穿透 scoped >>>

```vue
<template>
  <div class="box">
    <dialog></dialog>
  </div>
</template>
<!--使用 >>>或者 /deep/ 操作符（Sass 之类的预处理器无法正确解析 >>>，可以使用/deep/）-->
<style lang="scss" scoped>
.box {
  /deep/ input {
    width: 166px;
    text-align: center;
  }
}
</style>
或者
<style lang="scss" scoped>
.box >>> input {
    width: 166px;
    text-align: center;
  }
}
</style>
```
