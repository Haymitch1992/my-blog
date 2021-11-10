# Vue3.0 新特性

## setup

按照官方给出的说法，setup 函数是一个新的 Vue 组件选项，是用于在组件中使用 Composition API 的入口

```typescript
export default {
    setup(props, context){
        context.attrs
        context.slots
        context.parent
        context.root
        context.emit
        ...
    // 方法
    //定义的变量
    .. return()
    }
}
```

### Reactive (声明单一对象使用)

### ref 声明基础数据

内部值并返回一个响应性骑可变的 ref 对象，ref 对象具有.value 指向内部值得单个属性

```typescript
const number = ref(0);
const obh = reactive(() => {});
// 获取值方式 number.value
```

## 获取标签元素

在 Vue2 中，我们获取元素都是通过给元素一个 `ref` 属性，然后通过 `this.$refs.xx` 来访问的，但这在 Vue3 中已经不再适用了

接下来看看 Vue3 中是如何获取元素的吧

```html
<template>
  <div>
    <div ref="el">div元素</div>
  </div>
</template>

<script>
  import { ref, onMounted } from "vue";
  export default {
    setup() {
      // 创建一个DOM引用，名称必须与元素的ref属性名相同
      const el = ref(null);

      // 在挂载后才能通过 el 获取到目标元素
      onMounted(() => {
        el.value.innerHTML = "内容被修改";
      });

      // 把创建的引用 return 出去
      return { el };
    },
  };
</script>
```

获取元素的操作一共分为以下几个步骤：

- 先给目标元素的 ref 属性设置一个值，假设为 el
- 然后在 setup 函数中调用 ref 函数，值为 null，并赋值给变量 el，这里要注意，该变量名必须与我们给元素设置 ref 属性名相同
- 把对元素的引用变量 el 返回（return）出去

