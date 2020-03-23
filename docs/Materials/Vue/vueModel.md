## vue-model 的原理解析
v-model本质上就是语法糖，即利用v-model绑定数据后，其实就是既绑定了数据，又添加了一个input事件监听

满足语法糖规则：属性必须为value，方法名必须为：input。缺一不可

也就是说， v-model="sth" 是 :value="sth" @input="sth = $event.target.value" 的缩写。


### 要实现，自定义组件my-component的v-model，该如何实现。
```html
//  拆解如下
<my-component :value="price" @input="price = $event.target.value"></my-component>
```

```vue
//  根据这个我们可以在子组件中，进行拼凑value属性，input方法。
Vue.component('my-component', {
  template: `
    <span>
      <input
        type="text"
        :value="value"
        @input="$emit('input', $event.target.value)"
      >
    </span>
  `,
  props: ['value'],
})
```
::: tip
该组件中肯定是有value属性的，所以有，props:['value']，这个没问题吧，然后我们将传进来的value值，绑定到原生input标签的value属性上。
:::

::: tip
然后这个组件中向外抛出了一个input方法。我们可以通过，$emit方法，向外抛出一个方法，即input方法
:::
